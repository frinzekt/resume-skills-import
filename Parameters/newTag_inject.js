function(e,inputParam){
	debugger;
	[personId,tagName,parentTagId] = inputParam.split(",")
	debugger;
	console.log("Injected: "+ [personId,tagName,parentTagId])
	ajax_person_addTag(personId, tagName, null, parentTagId)
	debugger ;
	return personId + " -> " + tagName + " -> " + parentTagId
}