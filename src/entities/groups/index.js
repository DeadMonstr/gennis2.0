
export {GroupsList} from "./groups/ui/groupsList"
export {default as groups} from "./model/slice/groupsSlice"
export {default as deletedGroups} from "./model/slice/deletedGroupsSlice"
export {DeletedGroups} from "./deletedGroups/ui/deletedGroups";
export {getGroupsListData, getGroupsLoading} from "./model/selectors/groupsList"
export {fetchGroupsData} from "./model/slice/groupsThunk";
export {getDeletedGroupsData} from "./model/selectors/deletedGroups";


