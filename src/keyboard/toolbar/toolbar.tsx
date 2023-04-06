import { Key, KeyProps } from "../keys/key";
import { KeyId, KeysPropsMap } from "../keys/keys";
import { useEffect, useState } from "react";
import { ToolbarTabIds, defaultTabs, toolbarTabs } from "./toolbarTabs";
export type ToolbarProps = {
  keys?: (KeyId | KeyProps)[];
  tabs?: ToolbarTabIds[];
};

export const Toolbar = ({ keys, tabs = defaultTabs }: ToolbarProps) => {
  const [shownKeys, setShownKeys] = useState<(KeyId | KeyProps)[]>();
  const [currentTab, setCurrentTab] = useState<ToolbarTabIds>(tabs[0]);
  useEffect(() => {
    setShownKeys(keys);
  }, [keys]);

  useEffect(() => {
    if (keys?.length) return;
    const tab = toolbarTabs.find((t) => t.id === currentTab);
    setShownKeys(tab?.keys);
  }, [currentTab, keys]);
  return (
    <div className="bg-slate-400 pt-2 items-center w-full ">
      <div className="flex mx-auto max-w-3xl gap-x-2 justify-between pr-1 md:min-w-[768px] md:mx-auto">
        {/* <div className="flex mx-auto max-w-3xl md:max-w-full gap-x-2 justify-between pr-1 md:min-w-[768px] md:mx-auto"> */}

        <div className="overflow-auto">
          <div className="flex gap-x-1 px-1 pb-1 ">
            {shownKeys?.map((keyData) =>
              typeof keyData === "string" ? (
                <Key {...KeysPropsMap.get(keyData)!} key={keyData} fullWidth={false} />
              ) : (
                <Key {...keyData} key={keyData.id} fullWidth={false} />
              )
            )}
          </div>
        </div>
        {!keys?.length && (
          <div className="rounded focus-visible:outline-none focus-visible:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] pr-1 flex bg-slate-50 mb-1 shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            <select
              onChange={(e) => setCurrentTab(e.target.value as ToolbarTabIds)}
              className="bg-transparent border-r-4 focus-visible:outline-none border-transparent px-1 "
            >
              {tabs?.map((tabId) => (
                <option key={tabId} value={tabId}>
                  {toolbarTabs.find((t) => t.id === tabId)?.rawLabel}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <hr className="border-t-2 border-slate-500 mt-1" />
    </div>
  );
};
