export function getUpdatedList(shownList, searchText) {
    return shownList.filter(o => o.name.toLowerCase().includes(searchText.toLowerCase()));
}
