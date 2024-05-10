import Card from "../../Card/Card";

const ColorPage = () => {
  return (
    <div className="w-[90%] gap-8 mx-auto flex flex-wrap justify-center py-14">
      <Card colorName="Pink" colorHexCode="#FF6663" />
      <Card colorName="Blue" colorHexCode="#00FEFE" />
      <Card colorName="Red" colorHexCode="#FF0000" />
      <Card colorName="Green" colorHexCode="#00FF00" />
      <Card colorName="Yellow" colorHexCode="#FFFF00" />
      <Card colorName="Cyan" colorHexCode="#00FFFF" />
      <Card colorName="Magenta" colorHexCode="#FF00FF" />
      <Card colorName="Black" colorHexCode="#000000" />
      <Card colorName="Gray" colorHexCode="#808080" />
      <Card colorName="Orange" colorHexCode="#FFA500" />
    </div>
  );
};

export default ColorPage;
