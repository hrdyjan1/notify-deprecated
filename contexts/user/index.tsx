import React from 'react';
import {isNotDefined} from '../../constants/helpers/basic';
import {createCtx} from '../../constants/helpers/context';
import {saveStorageData} from '../../constants/helpers/storage';
import {ChildrenProps} from '../../constants/types/basics';
import {getDefaultId} from './helpers';
import {ActionCtx, IdType, StateCtx} from './types';

const [useUserState, StateProvider] = createCtx<StateCtx>();
const [useUserAction, DispatchProvider] = createCtx<ActionCtx>();

function UserProvider({children}: ChildrenProps) {
  const [id, setId] = React.useState<IdType>(null);

  React.useEffect(() => {
    async function setDefaultId() {
      const newId = await getDefaultId();
      // eslint-disable-next-line no-void
      void saveStorageData('id', newId);
      setId(newId);
    }
    if (isNotDefined(id)) {
      // eslint-disable-next-line no-void
      void setDefaultId();
    }
  }, [id]);

  const saveId = React.useCallback(async (id: string) => {
    // eslint-disable-next-line no-void
    void saveStorageData('id', id);
    setId(id);
  }, []);

  const stateValue = React.useMemo(() => ({id}), [id]);
  const actionValue = React.useMemo(() => ({saveId}), [saveId]);

  return (
    <StateProvider value={stateValue}>
      <DispatchProvider value={actionValue}>{children}</DispatchProvider>
    </StateProvider>
  );
}

export {UserProvider, useUserState, useUserAction};
