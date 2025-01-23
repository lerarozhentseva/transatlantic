import { useEffect } from "react";
import Hero from "components/views/caseViews/Hero/Hero";
import Result from "components/views/caseViews/Result/Result";
import Options from "components/views/caseViews/Options/Options";
import Brief from "components/views/homeViews/Brief/Brief";
import Solution from "components/views/caseViews/Solution";
import { useParams } from "react-router-dom";
import Tasks from "components/views/caseViews/Tasks";
import OtherCases from "components/common/OtherCases/OtherCases";

const CasePage = () => {
  const { caseID } = useParams();
  const number = Number(caseID);

  function ScrollToTop() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  return (
    <>
      <ScrollToTop />
      <Hero />
      <Options />
      {caseID !== "1" && <Tasks />}
      <Solution />
      <Result />
      <OtherCases number={number} />
      <Brief />
    </>
  );
};

export default CasePage;
