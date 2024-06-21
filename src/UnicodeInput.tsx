import React, { useEffect, useRef, useState } from 'react'
import { AbbreviationConfig } from '@leanprover/unicode-input'
import { InputAbbreviationRewriter } from '@leanprover/unicode-input-component'
import './UnicodeInput.css'

const FALLBACK_CONFIG: AbbreviationConfig = {
  abbreviationCharacter: "\\",
  customTranslations: {},
  eagerReplacementEnabled: true
}

const UnicodeInput: React.FC<{
  config?: AbbreviationConfig
}> = ({config=FALLBACK_CONFIG}) => {
  const inputRef = useRef<HTMLDivElement>(null)
  const [_rewriter, setRewriter] = useState<InputAbbreviationRewriter>()

  useEffect(() => {
    let rewriter = new InputAbbreviationRewriter(config, inputRef.current!)
    setRewriter(rewriter)
  }, [config])

  return <>
    <div ref={inputRef} className="textinput" id="query" contentEditable="true" autoFocus={true}></div>
  </>
}

export default UnicodeInput
