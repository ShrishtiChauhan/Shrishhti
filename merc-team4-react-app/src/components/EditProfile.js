import { useState } from "react";

const EditProfile = ({ profileToUpdate }) => {

    const [updatedProfile, setUpdatedProfile] = useState(profileToUpdate);

    const handleEditProfile = (evt) => {
        console.log(evt.target);
        setUpdatedProfile({
            ...updatedProfile,
            [evt.target.name]: evt.target.value
        });
    };

    const submitEditProfile = (evt) => {
        evt.preventDefault();
    };

    return (
        <div>
            <h1>Update Profile</h1>
            <form onSubmit={submitEditProfile}>
                <input type="text" name="name" value={updatedProfile.name} onChange={handleEditProfile} />
                <br />
                <input type="text" name="username" value={updatedProfile.username} onChange={handleEditProfile} />
                <br />
                <input type="password" name="password" value={updatedProfile.password} onChange={handleEditProfile} />
                <br />
                <input type="tel" name="phone" value={updatedProfile.phone} onChange={handleEditProfile} />
                <br />
                <input type="email" name="email" value={updatedProfile.email} onChange={handleEditProfile} />
                <br />
                <input type="file" name="avatar" value={updatedProfile.avatar} onChange={handleEditProfile} />
                <br />
                <input type="submit" value="Save" />
            </form>
        </div>
    );

};

export default EditProfile;




