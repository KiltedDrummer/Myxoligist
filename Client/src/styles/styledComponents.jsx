import styled from 'styled-components';


/*
**********************************************
**********************************************
**********************************************

              Main Boxes

**********************************************
**********************************************
**********************************************
*/

export const MainBox = styled.div`
  display: grid;
  grid-template-areas: "Header Header"
                       "Recipes Ingredients"
                       "Search AddItem";
  width: 1200px;
  height 1020px;
  border: 2px solid #240115;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background-color: #3A506B;
`;

export const Header = styled.div`
  grid-area: Header;
  text-align: center;
  border: 2px solid #240115;
  border-radius: 10px;
  position: relative;
  width: 75%;
  margin: 5px auto;
  background-color: #609cbb;
`;

export const RecipeBox = styled.div`
  grid-area: Recipes;
  width: 575px;
  height 800px;
  border: 2px solid #240115;
  border-radius: 10px;
  margin-left: 10px;
  position: relative;
  display: inline-block;
  background-color: #3A506B;
`;

export const IngredientBox = styled.div`
  grid-area: Ingredients;
  width: 575px;
  height 800px;
  border: 2px solid #240115;
  border-radius: 10px;
  margin-left: 10px;
  position: relative;
  display: inline-block;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const SplitBox = styled.div`
  grid-area: Ingredients;
  width: 575px;
  height 800px;
  margin-left: 10px;
  position: relative;
  display: inline-block;
  background-color: #3A506B;
`;

export const SearchBox = styled.div`
  grid-area: Search;
  width: 575px;
  height 60px;
  border: 2px solid #240115;
  border-radius: 10px;
  margin: 5px 0px 5px 10px;
  position: relative;
  display: inline-block;
  background-color: #609cbb;
`;

export const AddIngredient = styled.div`
  grid-area: AddItem;
  width: 575px;
  height 60px;
  border: 2px solid #240115;
  border-radius: 10px;
  margin: 5px 10px 5px 10px;
  position: relative;
  display: inline-block;
  background-color: #609cbb;
`;

/*
**********************************************
**********************************************
**********************************************

        Within the Recipe Box

**********************************************
**********************************************
**********************************************

*/

export const RecipeItem = styled.div`
  width: 90%;
  border: 2px solid #240115;
  background-color: #609cbb;
  border-radius: 10px;
  margin: 5px auto;
`;

export const TagStyle = styled.ul`
  list-style-type: none;
  margin: 1px;
  padding: 0;
  overflow: hidden;
`;

export const TagName = styled.li`
  display: inline-block;
  margin: 0 5px;
  padding: 0px 3px;
`;

export const SoloTag = styled.li`
  display: inline-block;
  margin: 1px 5px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0px 3px;
`;

export const IngredientsStyle = styled.ul`
  margin: 0;
  padding: 0;
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
`;

export const IngredientList = styled.li`
  margin: 3px auto;
  padding: 0px 3px;
  width: 70%;
`;

/*
**********************************************
**********************************************
**********************************************

        Within the Ingredient Box

**********************************************
**********************************************
**********************************************
*/

export const SoloIngredient = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  display: grid;
  grid-template-areas: "name remove"
                       "type subtype";
  margin: 3px auto;
  padding: 0px 3px;
  width: 90%;

  background-color: #609cbb;
`;

export const ItemName = styled.div`
  grid-area: name;
  overflow: hidden;
  margin: 2px auto;
  width: 300px;
  text-align: left;
`;

export const ItemType = styled.div`
  grid-area: type;
  overflow: hidden;
  margin: 2px auto;
  width: 300px;
  text-align: left;
`;

export const SubType = styled.div`
  grid-area: subtype;
  overflow: hidden;
  margin: 2px auto;
  width: 300px;
  text-align: left;
`;

export const RemoveItem = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  grid-area: remove;
  margin: 2px
  margin-left: 100px;
  width: 25px;
  height: 20px;
  font-weight: 700;
  background-color: #b9a97f;
`;

export const Minimized = styled.div`
  width: 575px;
  height 54px;
  border: 2px solid #240115;
  border-radius: 10px;
  position: relative;
  display: inline-block;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const Half = styled.div`
  width: 575px;
  height 390px;
  border: 2px solid #240115;
  border-radius: 10px;
  position: relative;
  display: inline-block;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Full = styled.div`
  width: 575px;
  height 740px;
  border: 2px solid #240115;
  border-radius: 10px;
  position: relative;
  display: inline-block;
  overflow-y: scroll;
  overflow-x: hidden;
`;



/*
**********************************************
**********************************************
**********************************************

        Within Search

**********************************************
**********************************************
**********************************************
*/

export const SearchForm = styled.form`
  margin-left: 10px;
  margin-right: 10px;
`;

export const SearchStyle = styled.input`
  -webkit-appearance: none;
  width: 420px;
  height: 25px;
  border-radius: 5px;
  margin: 15px 10px;
`;

export const Submit = styled.input`
    -webkit-appearance: none;
    width: 60px;
    height: 30px;
    border-radius: 10px;
    font-weight: 700;
`;

/*
**********************************************
**********************************************
**********************************************

        Within AddItem

**********************************************
**********************************************
**********************************************
*/

export const Add = styled.input`
    -webkit-appearance: none;
    width: 100px;
    height: 20px;
    border-radius: 10px;
    font-weight: 700;
    margin-left: 5px;
`;

/*
**********************************************
**********************************************
**********************************************

        OTHER 

**********************************************
**********************************************
**********************************************
*/

export const Centered = styled.div`
  margin: 2px auto;
  width: 30%;
  font-weight: 700;
`;

export const Bold = styled.div`
  display: inline;
  font-weight: 700;
  padding-right: 5px;
`;

export const Head = styled.div`
  text-align: center;
  border: 2px solid #240115;
  border-radius: 10px;
  position: relative;
  width: 75%;
  height: 40px;
  margin: 5px auto;
  line-height: 0px;
  background-color: #609cbb;
`;
