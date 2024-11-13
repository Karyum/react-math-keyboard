import { Key, KeyProps } from '../keys/key'
import { KeysPropsMap } from '../keys/keys'
import { Toolbar, ToolbarProps } from '../toolbar/toolbar'
import React from 'react'
import { ToolbarTabIds } from '../toolbar/toolbarTabs'
import { KeyId } from '../keys/keyIds'
import { Langs } from '../keys/keyGroup'
export type NumericLayoutProps = {
  toolbarKeys?: (KeyId | KeyProps)[]
  showTabs?: boolean
  toolbarTabs?: ToolbarTabIds[]
  onSwitch?: () => void
  onHideKeyboard?: () => void
  divisionFormat: 'fraction' | 'obelus'
  allowAlphabeticKeyboard: boolean
  onChangeLocation?: (newLocation: string) => void
  location: string
  lang: Langs
}

export const NumericLayout = ({
  toolbarKeys,
  toolbarTabs,
  onSwitch,
  divisionFormat,
  allowAlphabeticKeyboard,
  onHideKeyboard,
  onChangeLocation,
  location,
  lang
}: NumericLayoutProps) => {
  const hideToolbar = !!toolbarKeys && !toolbarKeys.length

  return (
    <div className="react-math-keyboard-keyboard-layout">
      {!hideToolbar && (
        <Toolbar
          keys={toolbarKeys}
          tabs={toolbarTabs}
          lang={lang}
          onHideKeyboard={onHideKeyboard}
        />
      )}
      <div className="react-math-keyboard-numeric-layout">
        <div
          className="react-math-keyboard-layout-grid"
          style={{
            gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
            flexGrow: 2
          }}
        >
          <Key {...KeysPropsMap.get('leftParenthesis')!} />
          <Key {...KeysPropsMap.get('rightParenthesis')!} />

          <Key {...KeysPropsMap.get('times')!} />
          {divisionFormat === 'fraction' ? (
            <Key {...KeysPropsMap.get('frac')!} />
          ) : (
            <Key {...KeysPropsMap.get('obelus')!} />
          )}
          <Key {...KeysPropsMap.get('slash')!} />

          <Key {...KeysPropsMap.get('inf')!} />
          <Key {...KeysPropsMap.get('sup')!} />
          <Key {...KeysPropsMap.get('square')!} />
          <Key {...KeysPropsMap.get('sqrt')!} />
          {allowAlphabeticKeyboard ? (
            <Key id="switch" label={'abc'} labelType="raw" onClick={onSwitch} isUtilityKey />
          ) : (
            ''
          )}

          <Key {...KeysPropsMap.get('power')!} />
          <Key {...KeysPropsMap.get('equal')!} />
        </div>
        <div
          className="react-math-keyboard-layout-grid"
          style={{
            gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
            flexGrow: 2
          }}
        >
          <Key {...KeysPropsMap.get('7')!} />
          <Key {...KeysPropsMap.get('8')!} />
          <Key {...KeysPropsMap.get('9')!} />
          <Key {...KeysPropsMap.get('4')!} />
          <Key {...KeysPropsMap.get('5')!} />
          <Key {...KeysPropsMap.get('6')!} />
          <Key {...KeysPropsMap.get('1')!} />
          <Key {...KeysPropsMap.get('2')!} />
          <Key {...KeysPropsMap.get('3')!} />
          <Key {...KeysPropsMap.get('left')!} />
          <Key {...KeysPropsMap.get('0')!} />
          <Key {...KeysPropsMap.get('right')!} />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '0.25rem',
            flexGrow: 1
          }}
        >
          <Key {...KeysPropsMap.get('plus')!} />
          <Key {...KeysPropsMap.get('minus')!} />

          <Key {...KeysPropsMap.get('comma')!} />
          <Key {...KeysPropsMap.get('del')!} />
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px'
          }}
        >
          <button
            className={`react-math-keyboard-key react-math-keyboard-key-utility`}
            onClick={() => {
              onChangeLocation && onChangeLocation(location === 'bottom' ? 'top' : 'bottom')
            }}
          >
            {/* arrow up */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {location === 'bottom' ? <path d="M18 15l-6-6-6 6" /> : <path d="M6 9l6 6 6-6" />}
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
