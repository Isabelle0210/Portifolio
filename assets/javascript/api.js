
async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/Isabelle0210/js-developer-portfolio/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}