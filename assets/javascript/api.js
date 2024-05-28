
async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/Isabelle0210/Portifolio/main/data/profile%2Cjson';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData 
}