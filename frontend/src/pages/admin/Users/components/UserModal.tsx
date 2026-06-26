import { useEffect, useState } from "react";
import { LockIcon, MailIcon, UserIcon } from "lucide-react";
import useModalStore from "../../../../features/ui/modals/modal.store";
import { useForm } from "../../../../hooks/useForm";
import AuthInput from "../../../../shared/AuthInputs";
import ImageUploadZone from "../../../../shared/ImageUploadZone";
import UploadImagePreview from "../../../../shared/UploadImagePreview";
import ModalWrapper from "../../../../shared/ModalWrapper";
import CustomSelect from "../../../../shared/CustomSelect";
import CustomButton from "../../../../shared/CustomButton";
import useUserStore from "../../../../features/users/user.store";
import validateInputs from "../../../../utils/validateInputs";
import {
  AddUserFormSchema,
  UpdateUserFormSchema,
  type AddUserForm,
  type UpdateUserForm,
} from "../../../../schemas/user";
import { toast } from "react-toastify";

const UserModal = () => {
  const { userModalOpen, closeUserModal, userModalType, selectedUser } =
    useModalStore();
  const { addUser, updateUser, loading } = useUserStore();

  const typeMap = {
    create: {
      title: "Add New User",
      btnTitle: "Add User",
    },
    update: {
      title: "Update Existing User",
      btnTitle: "Update User",
    },
  };

  const { formData, setFormData, handleChange, handleFileChange } = useForm({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirm_password: "",
    role: "manager",
    avatar: undefined,
  });

  const { fname, lname, email, password, confirm_password, role } = formData;
  const [avatarPreview, setAvatarPreview] = useState<string>("");

  // Sync edit states
  useEffect(() => {
    if (selectedUser && userModalType === "update") {
      setFormData({
        fname: selectedUser.fname || "",
        lname: selectedUser.lname || "",
        email: selectedUser.email || "",
        password: "",
        confirm_password: "",
        role: selectedUser.role || "manager",
      });

      if (selectedUser.avatar_url) {
        setAvatarPreview(selectedUser.avatar_url);
      } else {
        setAvatarPreview("");
      }
    } else if (userModalType === "create") {
      // Clear values if transitioning back to a raw create layout
      setFormData({
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirm_password: "",
        role: "manager",
        avatar: undefined,
      });
      setAvatarPreview("");
    }
  }, [selectedUser, userModalType, userModalOpen]);

  // Image Upload File Stream Handlers
  const handleAvatarSelection = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (avatarPreview) URL.revokeObjectURL(avatarPreview);
    setAvatarPreview(URL.createObjectURL(file));
    handleFileChange(e);
  };

  const handleRemoveAvatar = () => {
    if (avatarPreview) URL.revokeObjectURL(avatarPreview);
    setAvatarPreview("");
    setFormData((prev) => ({ ...prev, avatar: undefined }));
  };

  useEffect(() => {
    return () => {
      if (avatarPreview) URL.revokeObjectURL(avatarPreview);
    };
  }, [avatarPreview]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (userModalType === "create") {
      const error = validateInputs(AddUserFormSchema, formData);

      if (error) {
        toast.error(error);
        return;
      }

      addUser(formData as AddUserForm);
    } else if (userModalType === "update") {
      if (!selectedUser) return;

      const updatePayload = { ...formData };
      if (!updatePayload.password && !updatePayload.confirm_password) {
        delete updatePayload.password;
        delete updatePayload.confirm_password;
      }

      const error = validateInputs(UpdateUserFormSchema, updatePayload);

      if (error) {
        toast.error(error);
        return;
      }

      updateUser(selectedUser.id, updatePayload as UpdateUserForm);
    }
  };

  return (
    <ModalWrapper
      title={typeMap[userModalType]?.title || ""}
      isOpen={userModalOpen}
      onClose={loading ? () => {} : closeUserModal} // Block manual escape during raw mutations
      size="md"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* User Avatar Section */}
        {avatarPreview ? (
          <UploadImagePreview
            imagePreview={avatarPreview}
            handleRemove={loading ? () => {} : handleRemoveAvatar}
          />
        ) : (
          <ImageUploadZone
            label="User Avatar (optional)"
            imageName="user avatar"
            id="avatar"
            name="avatar"
            fileChange={handleAvatarSelection}
          />
        )}

        {/* First and Last name */}
        <div className="grid grid-cols-2 gap-4">
          <AuthInput
            label="First Name"
            placeholder="Enter first name"
            Icon={UserIcon}
            id="fname"
            name="fname"
            value={fname}
            onChange={handleChange}
          />
          <AuthInput
            label="Last Name"
            placeholder="Enter last name"
            Icon={UserIcon}
            id="lname"
            name="lname"
            value={lname}
            onChange={handleChange}
          />
        </div>

        {/* Email & Role Layout Row */}
        <div className="grid grid-cols-2 gap-4 items-end">
          <AuthInput
            type="email"
            label="Email Address"
            Icon={MailIcon}
            placeholder="example@dojo.com"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <CustomSelect
            label="Role"
            id="role"
            name="role"
            value={role}
            onChange={(name, value) => {
              if (loading) return;
              setFormData((prev) => ({ ...prev, [name]: value }));
            }}
            options={[
              { title: "Admin", value: "admin" },
              { title: "Manager", value: "manager" },
            ]}
          />
        </div>

        {/* Passwords Input Row */}
        {userModalType === "create" && (
          <div className="grid grid-cols-2 gap-4">
            <AuthInput
              type="password"
              isPasswordField={true}
              label={
                userModalType === "update"
                  ? "New Password (optional)"
                  : "Password"
              }
              Icon={LockIcon}
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <AuthInput
              type="password"
              isPasswordField={true}
              label={
                userModalType === "update"
                  ? "Confirm New Password"
                  : "Confirmation Password"
              }
              Icon={LockIcon}
              id="confirm_password"
              name="confirm_password"
              value={confirm_password}
              onChange={handleChange}
            />
          </div>
        )}

        {/* Form Trigger Actions Controls Wrapper */}
        <div className="flex items-center justify-end space-x-4 pt-2">
          <CustomButton
            type="button"
            title="Cancel"
            titleStyles="font-medium text-secondary"
            buttonStyles="bg-white hover:bg-gray-100 border border-border"
            onClick={closeUserModal}
          />
          <CustomButton
            type="submit"
            title={typeMap[userModalType]?.btnTitle || ""}
            titleStyles="text-white"
            buttonStyles="bg-primary hover:bg-primary-hover"
            loading={loading}
          />
        </div>
      </form>
    </ModalWrapper>
  );
};

export default UserModal;
