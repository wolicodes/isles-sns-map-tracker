import { css } from '@emotion/css';

export const styles = {
  parent: css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 150px);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    justify-content: center;
    label: parent;
  `,
  child: css`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-size: 25px;
    label: child;
  `,
  redCross: css`
    font-size: 60px;
    label: redCross;
  `,
};
