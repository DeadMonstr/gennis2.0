import {SchoolLeadershipTeam} from "../../../../entities/schoolHome";
import {useSelector} from "react-redux";
import {getSchoolLeaderShip} from "../../../../entities/schoolHome/model/selector/schoolLeaderShipSelector";

export const SchoolLeadershipTeamModal = () => {

    const data = useSelector(getSchoolLeaderShip)

    return (
        <div>

            <SchoolLeadershipTeam data={data}/>
        </div>
    );
};

