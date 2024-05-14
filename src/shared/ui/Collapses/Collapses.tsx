import React, { useState } from 'react'

import cn from 'classnames'
import s from './Collapses.module.scss'
import SVGSymbol from '../SVGSymbol/SVGSymbol'
import { Content, type CollapseContentProps } from './ui/Content'

export interface CollapseOption {
  key: string
  header: string
  content: CollapseContentProps
}

interface CollapsesProps {
  options: CollapseOption[]
  classNames?: string
}

export const Collapses = ({ options, classNames }: CollapsesProps) => {
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set())

  const toggleItem = (key: string) => {
    setActiveKeys((prevActiveKeys) => {
      const newActiveKeys = new Set(prevActiveKeys)
      if (newActiveKeys.has(key)) {
        newActiveKeys.delete(key)
      } else {
        newActiveKeys.add(key)
      }
      return newActiveKeys
    })
  }

  return (
    <div className={s.collapses}>
      {options.map((option) => {
        const { content, key, header } = option
        const isChecked = activeKeys.has(key)

        return (
          <div key={key}>
            <label className={cn(s.label, isChecked && s.label_checked)}>
              <input
                type="checkbox"
                name="panel"
                className={s.input}
                checked={isChecked}
                onChange={() => {
                  toggleItem(key)
                }}
              />
              {header}
              <div className={s.icon__wrap}>
                <SVGSymbol
                  classNames={cn(s.icon, isChecked && s.icon_checked)}
                  name={'chevron'}
                />
              </div>
            </label>
            <div className={cn(s.content, isChecked && s.content_checked)}>
              {isChecked && (
                <Content
                  header={content.header}
                  main={content.main}
                  img={content.img}
                  imgAlt={content.imgAlt}
                />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
