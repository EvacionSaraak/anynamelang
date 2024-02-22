function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getServants(sortName) {
    // const apiUrl = "https://api.atlasacademy.io/export/NA/nice_servant.json"
    const apiUrl = "https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json"
    let tableHeaders = ["Collection No.", "Image", "Servant Class", "Servant Name"]
    let tableData = []

    console.log(`[${mymodule.fullname}] Fetching Data for ${sortName}...`)
    //let servantDataRaw = 
    fetch(apiUrl).then(response => {
        if (!response.ok) {throw new Error("Network has no response!!!");}
        return response.json();
    }).then(data => {
        data.forEach(servant => {
            if (servant.name.toUpperCase().includes(sortName.toUpperCase())) {
                var servantData = `[${servant.collectionNo}][${capitalizeFirstLetter(servant.className)}] ${servant.name}:`;
                console.log(servantData); // ${servant.originalName}
                
                rawData = [servant.collectionNo, servant.extraAssets.faces.ascension[3] , servant.className, servant.name]
                rawData.forEach(dt => { tableData.append(dt) })
                
                console.log(rawData);
                // var skillNames = [];
                // servant.skills.forEach(skill => {
                //     var skillTemp = `${skill.name}`;
                //     for (var x = 0; x < skillNames.length; x++){
                //         if (skillNames[x][0] == skill.num){
                //             skillTemp = `${skill.name} [UPGRADED]`
                //         }
                //     }
                //     skillNames.push([skill.num, `${skillTemp}`]); //: ${skill.detail}
                // });
                // skillNames.sort(function(a,b){return a[0]-b[0];});
                // console.log(skillNames);
            }
        });
    }).catch(error => {console.log("Unexpected Error Encountered!", error)});
    return tableData;
}

export default {
    getServants, 
}