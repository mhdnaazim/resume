import React, { useState } from "react";
import './Form.css'
import { Link, useNavigate } from "react-router-dom";

const Form = () => {

    const navigate = useNavigate()

    const [profile, setProfile] = useState({
        image: "",
        name: "",
        designation: "",
        mobile: "",
        email: "",
        website: "",
        location: "",
        bio: "",
        ugUniversity: "",
        year: "",
        degree: "",
        ugMark: "",
        pgUniversity: "",
        year2: "",
        higher: "",
        pgMark: "",
        firstRole: "",
        expYear1: "",
        firstCompany: "",
        secondRole: "",
        expYear2: "",
        secondCompany: "",
        skill1: "",
        skill2: "",
        skill3: "",
        skill4: "",
        project1: "",
        project1Des: "",
        project2: "",
        project2Des: "",
    })

    const handleNavigate = () => {
        navigate("/Resume", { state: profile })
    }

    console.log(profile);

    const handleImage = (e) => {
        const file = e.target.files[0];


        const reader = new FileReader()
        reader.onloadend = () => {
            setProfile({ ...profile, image: reader.result });
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    return (
        <>
            <div className="form-body">
                <div className="form-container">

                    <h1>RESUME FORM</h1>

                    <input type="file" accept="image/*" onChange={handleImage} />

                    <input type="text" value={profile.name} placeholder="Name" onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
                    <input type="text" value={profile.designation} placeholder="Designation" onChange={(e) => setProfile({ ...profile, designation: e.target.value })} />

                    <input type="text" value={profile.mobile} placeholder="Mobile" onChange={(e) => setProfile({ ...profile, mobile: e.target.value })} />
                    <input type="text" value={profile.email} placeholder="Email" onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
                    <input type="text" value={profile.website} placeholder="Website URL" onChange={(e) => setProfile({ ...profile, website: e.target.value })} />
                    <input type="text" value={profile.location} placeholder="Location" onChange={(e) => setProfile({ ...profile, location: e.target.value })} />

                    <input type="text" value={profile.bio} placeholder="Bio" onChange={(e) => setProfile({ ...profile, bio: e.target.value })} />

                    <input type="text" value={profile.ugUniversity} placeholder="UG University" onChange={(e) => setProfile({ ...profile, ugUniversity: e.target.value })} />
                    <input type="text" value={profile.year} placeholder="Year" onChange={(e) => setProfile({ ...profile, year: e.target.value })} />
                    <input type="text" value={profile.degree} placeholder="UG Department" onChange={(e) => setProfile({ ...profile, degree: e.target.value })} />
                    <input type="text" value={profile.ugMark} placeholder="SGPA" onChange={(e) => setProfile({ ...profile, ugMark: e.target.value })} />
                    <input type="text" value={profile.pgUniversity} placeholder="PG University" onChange={(e) => setProfile({ ...profile, pgUniversity: e.target.value })} />
                    <input type="text" value={profile.year2} placeholder="Year" onChange={(e) => setProfile({ ...profile, year2: e.target.value })} />
                    <input type="text" value={profile.higher} placeholder="PG Department" onChange={(e) => setProfile({ ...profile, higher: e.target.value })} />
                    <input type="text" value={profile.pgMark} placeholder="SGPA" onChange={(e) => setProfile({ ...profile, pgMark: e.target.value })} />

                    <input type="text" value={profile.firstRole} placeholder="First Job Role" onChange={(e) => setProfile({ ...profile, firstRole: e.target.value })} />
                    <input type="text" value={profile.expYear1} placeholder="Year" onChange={(e) => setProfile({ ...profile, expYear1: e.target.value })} />
                    <input type="text" value={profile.firstCompany} placeholder="Company" onChange={(e) => setProfile({ ...profile, firstCompany: e.target.value })} />
                    <input type="text" value={profile.secondRole} placeholder="Latest Job Role" onChange={(e) => setProfile({ ...profile, secondRole: e.target.value })} />
                    <input type="text" value={profile.expYear2} placeholder="Year" onChange={(e) => setProfile({ ...profile, expYear2: e.target.value })} />
                    <input type="text" value={profile.secondCompany} placeholder="Company" onChange={(e) => setProfile({ ...profile, secondCompany: e.target.value })} />

                    <input type="text" value={profile.skill1} placeholder="Skill 1" onChange={(e) => setProfile({ ...profile, skill1: e.target.value })} />
                    <input type="text" value={profile.skill2} placeholder="Skill 2" onChange={(e) => setProfile({ ...profile, skill2: e.target.value })} />
                    <input type="text" value={profile.skill3} placeholder="Skill 3" onChange={(e) => setProfile({ ...profile, skill3: e.target.value })} />
                    <input type="text" value={profile.skill4} placeholder="Skill 4" onChange={(e) => setProfile({ ...profile, skill4: e.target.value })} />


                    <input type="text" value={profile.project1} placeholder="Project 1" onChange={(e) => setProfile({ ...profile, project1: e.target.value })} />
                    <input type="text" value={profile.project1Des} placeholder="Project 1 Description" onChange={(e) => setProfile({ ...profile, project1Des: e.target.value })} />
                    <input type="text" value={profile.project2} placeholder="Project 2" onChange={(e) => setProfile({ ...profile, project2: e.target.value })} />
                    <input type="text" value={profile.project2Des} placeholder="Project 2 Description" onChange={(e) => setProfile({ ...profile, project2Des: e.target.value })} />

                    <button onClick={handleNavigate}>SUBMIT</button>
                </div>
            </div>
        </>
    )
}

export default Form