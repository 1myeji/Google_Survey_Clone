import Tooltip from '@mui/material/Tooltip';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import Button from '@mui/material/Button';
import styled from 'styled-components';

interface IEditFormatIconProps {
  isFocused: boolean;
}

const EditFormatIcon = ({ isFocused }: IEditFormatIconProps) => {
  return (
    <IconWrapper isFocused={isFocused}>
      <Tooltip title="굵게" placement="top">
        <Button>
          <FormatBoldIcon />
        </Button>
      </Tooltip>
      <Tooltip title="기울임꼴" placement="top">
        <Button>
          <FormatItalicIcon />
        </Button>
      </Tooltip>
      <Tooltip title="밑줄" placement="top">
        <Button>
          <FormatUnderlinedIcon />
        </Button>
      </Tooltip>
      <Tooltip title="링크 삽입" placement="top">
        <Button>
          <InsertLinkIcon />
        </Button>
      </Tooltip>
      <Tooltip title="서식 삭제" placement="top">
        <Button>
          <FormatClearIcon />
        </Button>
      </Tooltip>
    </IconWrapper>
  );
};

export default EditFormatIcon;

const IconWrapper = styled.div`
  margin-top: 4px;
  display: ${({ isFocused }: { isFocused: boolean }) => (isFocused ? 'block' : 'none')};
  .MuiButtonBase-root-iLYEZ {
    color: black;
    opacity: 0.5;
    min-width: 30px;
  }
`;
