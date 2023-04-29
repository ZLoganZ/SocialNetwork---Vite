import styled from "styled-components";
import { commonColor } from "../../../util/cssVariable/cssVariable";

const StyleTotal = styled.div`
  background-color: ${(props) => props.theme.colorBg1};
  .searchChat {
    .userChat {
      .userItem {
        :hover {
          background-color: ${(props) => props.theme.colorBg2};
          cursor: pointer;
          transition: all 0.5s;
        }
      }
    }
  }
  .userChat {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default StyleTotal;
