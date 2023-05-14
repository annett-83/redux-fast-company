import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
    getProfessionsLoadingStatus,
    getProfessionsByIdis
} from "../../store/professions";

const Profession = ({ id }) => {
    console.log("id", id);
    const isLoading = useSelector(getProfessionsLoadingStatus());
    const prof = useSelector(getProfessionsByIdis(id));
    if (!isLoading) {
        return <p>{prof.name}</p>;
    } else return "Loading...";
};
Profession.propTypes = {
    id: PropTypes.string
};
export default Profession;
