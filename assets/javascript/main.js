
function novaProfileInfo(profileData){
    
    const location = document.getElementById('profile.location')
    location.innerText = profileData.location
    
    const age = document.getElementById('profile.age')
    age.innerText = profileData.age

    const graduation = document.getElementById('profile.graduation')
    graduation.innerText = profileData.graduation

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')
    
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')

}
(async function(){
    const profileData = await fetchProfileData();
    novaProfileInfo(profileData);
    updateSoftSkills(profileData);
})()