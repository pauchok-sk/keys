export default function advatarLoad() {
  const avatarWrapper = document.querySelector("#avatar-wrapper");
  const inputAvatar = document.querySelector("#input-avatar");
  
  if (avatarWrapper) {
    const img = avatarWrapper.querySelector("img");
    inputAvatar.addEventListener("change", (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = function () {
        const src = reader.result;
        img.src = src;
        avatarWrapper.style.background = "none";
      };
      reader.readAsDataURL(file);
    });
  }
}
