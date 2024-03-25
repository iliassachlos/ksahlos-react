function ProfileImage() {
    const imageSrc =
        "https://firebasestorage.googleapis.com/v0/b/photography-site-ksahlos-84194.appspot.com/o/Others%2Fksahlos-profile-img.jpg?alt=media&token=3808a140-06fe-4d4d-b4dc-32d8f084b61e";

    return (
        <img src={imageSrc} alt="profile-pic" className="rounded shadow-md" loading="eager"/>
    )
}

export default ProfileImage