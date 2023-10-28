import  styled  from "styled-components";

export const DropdownDiv = styled.div`
  /* background-color: red; */
  position: relative;

  .select_dropdown {
    border: 1px solid #cecece;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    padding: 8px 14px;
    cursor: pointer;

    p {
      margin: 0;
      font-size: 13px;
      font-weight: 400;
      color: #989797;
    }

    .select_dropdown_arrange {
      display: flex;
      align-items: center;
      justify-content: center;

      .select_dropdown_arrange_icon {
        font-size: 10px;
        color: #989797;
      }
    }
  }
  
.dropdown_component_Sub{
      width: 100%;
      /* position: absolute; */
      z-index: 20;
      background-color: #fff;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      border: 4px solid #373434;
      //border: 6px solid #d0d5dd56;
      /* box-shadow: 0px 5px 8px 2px #0000000F; */
      //margin-top: 3px;
      padding: 4px 6px;
      margin-top: 15px;
      margin-left: 5rem;
  
}
  
  .dropdown_component_Sub_Sub{
    width: 100%;
    /* position: absolute; */
    z-index: 20;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    border: 4px solid #373434;
    //border: 6px solid #d0d5dd56;
    /* box-shadow: 0px 5px 8px 2px #0000000F; */
    //margin-top: 3px;
    padding: 4px 6px;
    margin-top: 15px;
    margin-left: 10rem;
  }

  .dropdown_component {
    width: 100%;
    /* position: absolute; */
    z-index: 20;
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    border: 4px solid #373434;
    //border: 6px solid #d0d5dd56;
    /* box-shadow: 0px 5px 8px 2px #0000000F; */
    //margin-top: 3px;
    padding: 4px 6px;
    margin-top: 15px;


    .dropdown_component_content {
      padding: 10px 5px;
      //margin: 10px 0px 15px 0px;


      .dropdown_component_category {
        display: flex;
        flex-direction: column;
        position: relative;


        .dropdown_component_category_content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          cursor: pointer;
          border: 2px solid #d0d5dd56;
          border-radius: 8px;
          padding: 10px 5px;

          .dropdown_component_category_text {
            font-size: 13px;
            font-weight: 600;
            margin: 0;
            color: #101828;
          }


          .dropdown_component_category_arrange {
            display: flex;
            align-items: center;
            justify-content: center;


            .dropdown_component_category_icon {
              font-size: 16px;
              color: #989797;
            }
          }
        }


        .dropdown_component_subcategory {
          /* position: absolute; */
          /* bottom: 0; */
          width: 100%;
          background-color: #fff;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          /* box-shadow: 0px 5px 8px 2px #0000000F; */
          //margin-top: 5px;
          padding: 10px 10px;


          .dropdown_component_subcategory_content {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            padding: 5px 5px;
            //margin: 10px 0px 15px 0px;

            .dropdown_component_subcategory_content_space {
              display: flex;
              align-items: center;
              justify-content: space-between;
              position: relative;
              width: 100%;
              border: 2px solid #d0d5dd56;
              border-radius: 8px;
              padding: 10px 5px;
              cursor: pointer;


              .dropdown_component_subcategory_text {
                font-size: 12px;
                font-weight: 400;
                margin: 0;
                color: #101828;
              }


              .dropdown_component_subcategory_arrange {
                display: flex;
                align-items: center;
                justify-content: center;

                .dropdown_component_subcategory_icon {
                  font-size: 20px;
                  color: #989797;
                }
              }
            }


            .dropdown_component_subMaincategory {
              width: 100%;
              background-color: #fff;
              border-radius: 8px;
              display: flex;
              flex-direction: column;
              //margin-top: 5px;
              padding: 15px 14px;

              .dropdown_component_subMaincategory_content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                position: relative;
                width: 100%;
                border: 1px solid #d0d5dd56;
                border-radius: 8px;
                padding: 10px 5px;
                cursor: pointer;
                margin-top: 5px;


                .dropdown_component_subMaincategory_text {
                  font-size: 16px;
                  font-weight: 400;
                  margin: 0;
                  color: #101828;

                }
              }
            }
          }
        }
      }
    }
  }
`