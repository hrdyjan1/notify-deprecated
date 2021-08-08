import {Settings} from '../../../constants/hooks/useBottomModal';

const ReorderModalSettings: Settings = {
  snapPoints: [0, '15%'],
  withBackdrop: false,
};

const TmpModalSettings: Settings = {
  snapPoints: [0, '38%', '100%'],
  withBackdrop: true,
};

const data = [
  {text: 'First'},
  {text: 'Second'},
  {text: 'Third'},
  {text: 'Fourth'},
  {text: 'Fifth'},
];

export {ReorderModalSettings, TmpModalSettings, data};
