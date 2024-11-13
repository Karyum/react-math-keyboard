import React, { useContext, useEffect, useRef, useState } from 'react'
import $ from 'jquery'
import { MathFieldContext } from '../mathInput/mathfieldContext'
import { AlphabetLayout } from './layout/alphabetLayout'
import { NumericLayout, NumericLayoutProps } from './layout/numericLayout'

import { KeyProps } from './keys/key'
import { ToolbarTabIds } from './toolbar/toolbarTabs'
import { KeyId } from './keys/keyIds'
import { Langs } from './keys/keyGroup'

function endsWithFracClosingBrace(input: string) {
  const sanitizedInput = input.replace(
    /\\frac\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g,
    '\\frac{}{}'
  )

  // Step 2: Check if the sanitized string ends with `\frac{}{}` followed by the closing brace
  return sanitizedInput.endsWith('\\frac{}{}')
}

export type KeyboardProps = {
  numericToolbarKeys?: (KeyId | KeyProps)[]
  numericToolbarTabs?: ToolbarTabIds[]
  alphabeticToolbarKeys?: (KeyId | KeyProps)[]
  divisionFormat: 'fraction' | 'obelus'
  allowAlphabeticKeyboard: boolean
  onHideKeyboard?: () => void
  onShowKeyboard?: () => void
  lang: Langs
}

export const Keyboard = ({
  numericToolbarKeys,
  numericToolbarTabs,
  alphabeticToolbarKeys,
  divisionFormat,
  allowAlphabeticKeyboard,
  onHideKeyboard,
  onShowKeyboard,
  lang
}: KeyboardProps) => {
  const mathfield = useContext(MathFieldContext)
  useEffect(() => {
    $(`#mq-keyboard-${mathfield.id}`).css('bottom', `0px`)
  }, [])

  const [currentLayoutType, setCurrentLayoutType] = useState('numeric')
  const [location, setLocation] = useState('bottom')

  const onSwitch = () => {
    if (currentLayoutType === 'numeric') {
      mathfield.cmd('text')
    } else {
      // The reason for this condition is that when the user is adding a fraction
      // and switches to the alphabet keyboard, when they are back the numeric keyboard
      // it exits the fraction input, which is annoying if you want to do somethiing like a + b / 2
      if (!endsWithFracClosingBrace(mathfield.latex())) {
        mathfield.moveToRightEnd()
      } else if (endsWithFracClosingBrace(mathfield.latex())) {
        mathfield.keystroke('Right')
      }
    }

    setCurrentLayoutType((prev) => (prev === 'numeric' ? 'alphabet' : 'numeric'))
  }

  const onChangeLocation = (newLocation: string) => {
    setLocation(newLocation)
  }

  useEffect(() => {
    if (location === 'bottom') {
      $(`#mq-keyboard-${mathfield.id}`).css('bottom', `0px`)
      $(`#mq-keyboard-${mathfield.id}`).css('top', 'unset')
    }

    if (location === 'top') {
      $(`#mq-keyboard-${mathfield.id}`).css('bottom', 'unset')
      $(`#mq-keyboard-${mathfield.id}`).css('top', `0px`)
    }
  }, [location])
  // const onMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   if (e.target instanceof HTMLElement && e.target.nodeName !== "SELECT")
  //     e.preventDefault();
  //   mathfield.focus();
  // };

  return (
    <div
      id={`mq-keyboard-${mathfield.id}`}
      // onMouseUp={onMouseUp}
      // className="fixed z-[1310] transition-[bottom] duration-300 flex justify-center bottom-[-300px] left-0 first-letter:bottom-0 bg-slate-200 pb-1 m-0 w-full text-slate-900 gap-1 scrollbar"
      className="react-math-keyboard-keyboard-container scrollbar"
    >
      {currentLayoutType === 'numeric' && (
        <NumericLayout
          onSwitch={onSwitch}
          toolbarKeys={numericToolbarKeys}
          toolbarTabs={numericToolbarTabs}
          divisionFormat={divisionFormat}
          allowAlphabeticKeyboard={allowAlphabeticKeyboard}
          onHideKeyboard={onHideKeyboard}
          onChangeLocation={onChangeLocation}
          location={location}
          lang={lang}
        />
      )}
      {currentLayoutType === 'alphabet' && (
        <AlphabetLayout onSwitch={onSwitch} toolbarKeys={alphabeticToolbarKeys} lang={lang} />
      )}
    </div>
  )
}
