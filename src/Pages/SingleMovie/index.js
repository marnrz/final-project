import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";

export default function SinglePart() {
  return (
    <PrimaryLayout>
      <SinglePart ApiUrl="movie" />
      {/* <SinglePart ApiUrl="tv" /> */}
    </PrimaryLayout>
  );
}
