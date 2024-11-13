import { Key, KeyProps } from '../keys/key'
import { KeysPropsMap } from '../keys/keys'
import { useContext, useEffect, useRef, useState } from 'react'
import { ToolbarTabIds, defaultTabs, toolbarTabs } from './toolbarTabs'
import { MathFieldContext } from '../../mathInput/mathfieldContext'
import { KeyId } from '../keys/keyIds'
import { Langs } from '../keys/keyGroup'
export type ToolbarProps = {
  keys?: (KeyId | KeyProps)[]
  tabs?: ToolbarTabIds[]
  lang: Langs
  onHideKeyboard?: () => void
}

export const Toolbar = ({ keys, tabs = defaultTabs, lang, onHideKeyboard }: ToolbarProps) => {
  const [shownKeys, setShownKeys] = useState<(KeyId | KeyProps | string)[]>()
  const [currentTab, setCurrentTab] = useState<ToolbarTabIds>(tabs[0])
  const mathfield = useContext(MathFieldContext)

  useEffect(() => {
    setShownKeys(keys)
  }, [keys])

  useEffect(() => {
    if (keys?.length) return
    const tab = toolbarTabs.find((t) => t.id === currentTab)
    setShownKeys(tab?.keys)
  }, [currentTab, keys])

  return (
    <div className="react-math-keyboard-toolbar-container">
      <div className="react-math-keyboard-toolbar">
        <div style={{ overflowX: 'auto', overflowY: 'hidden' }}>
          <div className="react-math-keyboard-toolbar-keys-container">
            <Key
              id="close"
              label={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-keyboard"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z" />
                  <path d="M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75v-.5zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.5zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75v-.5zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75v-.5zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75v-.5zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75v-.5zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75v-.5zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75v-.5zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75v-.5zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25v-.5z" />
                </svg>
              }
              labelType="svg"
              onClick={onHideKeyboard}
              isUtilityKey
            />
            {shownKeys?.map((keyData) => {
              if (typeof keyData === 'string') {
                const foundKey = KeysPropsMap.get(keyData as KeyId)
                if (foundKey)
                  return (
                    <Key {...KeysPropsMap.get(keyData as KeyId)!} key={keyData} fullWidth={false} />
                  )
                else
                  return (
                    <Key
                      id={keyData as KeyId}
                      label={keyData}
                      labelType={'tex'}
                      mathfieldInstructions={{
                        content: keyData,
                        method: 'write'
                      }}
                    />
                  )
              } else return <Key {...keyData} key={keyData.id} fullWidth={false} />
            })}
          </div>
        </div>
        {!keys?.length && (
          <div className="react-math-keyboard-select-container">
            <select
              onChange={(e) => {
                setCurrentTab(e.target.value as ToolbarTabIds)
                mathfield.focus()
              }}
              className="react-math-keyboard-select"
            >
              {tabs?.map((tabId) => (
                <option key={tabId} value={tabId}>
                  {toolbarTabs.find((t) => t.id === tabId)?.rawLabel[lang]}
                </option>
              ))}
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              className="bi bi-chevron-right react-math-keyboard-select-arrow"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        )}
      </div>
      <hr className="react-math-keyboard-divider" />
    </div>
  )
}
