import React, { useEffect, useRef, useState } from 'react'
import {
  AbbreviationConfig,
  AbbreviationProvider,
  AbbreviationRewriter,
  AbbreviationTextSource,
  Change,
  Range,
  SelectionMoveMode,
} from '@leanprover/unicode-input'

import { InputAbbreviationRewriter } from '@leanprover/unicode-input-component'
import './UnicodeInput.css'

const FALLBACK_CONFIG: AbbreviationConfig = {
  abbreviationCharacter: "\\",
  customTranslations: {},
  eagerReplacementEnabled: true
}

async function handeBeforeInput (ev: Event) {
  // const inputEvent = ev as InputEvent
  // const targetRange: StaticRange | undefined = inputEvent.getTargetRanges()[0]
  // if (targetRange === undefined) {
  //     return
  // }
  // const range = computeTextRangeFromNodeRange(
  //     textInput,
  //     { node: targetRange.startContainer, offset: targetRange.startOffset },
  //     { node: targetRange.endContainer, offset: targetRange.endOffset },
  // )
  // if (range === undefined) {
  //     return
  // }
  // const newText = inputEvent.data ?? ''
  // const change: Change = { range, newText }
  // this.rewriter.changeInput([change])
}

const UnicodeInput: React.FC<{ config?: AbbreviationConfig }> = ({config=FALLBACK_CONFIG}) => {
  const inputRef = useRef<HTMLDivElement>(null)
  const [abbrevProvider, setAbbrevProvider] = useState<AbbreviationProvider>()
  const [abbrevRewriter, setAbbrevRewriter] = useState<AbbreviationRewriter>()

  // TODO
  const textSource: AbbreviationTextSource = {
    replaceAbbreviations: (changes) => {return new Promise((resolve)=>{return true})},
    selectionMoveMode: () => ({
      kind: 'OnlyMoveCursorSelections',
      updateUnchangedSelections: true}),
    collectSelections: () => ([]),
    setSelections: (selections) => Promise.resolve
  }

  useEffect(() => {
    let provider = new AbbreviationProvider(config)
    setAbbrevProvider(provider)
    let rewriter = new AbbreviationRewriter(config, provider, textSource)
    setAbbrevRewriter(rewriter)


    // let abbrevRewriter: InputAbbreviationRewriter = new InputAbbreviationRewriter(config, inputRef.current!)
  }, [config])

  useEffect(() => {
    const div = inputRef.current!
    // subscribe event
    div.addEventListener("beforeinput", handleOnScroll);
    return () => {
      // unsubscribe event
      div.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  return <>
    <div ref={inputRef} className="unicode-input" contentEditable="true"></div>
  </>
}

export default UnicodeInput
