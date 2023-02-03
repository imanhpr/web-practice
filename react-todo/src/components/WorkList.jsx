import WorkCard from "./WorkCard";

function WorkList({ rawWorkList, handelDeleteById, handelUpdateById }) {
  const workList = rawWorkList.map((value, index) => (
    <WorkCard
      key={index}
      index={index}
      text={value}
      onDelete={handelDeleteById}
      onEditSubmit={handelUpdateById}
    />
  ));
  if (workList.length === 0) {
    return <h2 className="secondary">There Is Nothing To Show</h2>;
  }
  return <div>{workList}</div>;
}
export default WorkList;
