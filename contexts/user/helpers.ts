import ShortUniqueId from 'short-unique-id';
import {isString} from '../../constants/helpers/basic';
import {getStorageData} from '../../constants/helpers/storage';

const createUid = new ShortUniqueId({length: 16});

async function getDefaultId() {
  const abc = await getStorageData('id');
  return isString(abc) ? abc : (createUid() as string);
}

export {getDefaultId};
