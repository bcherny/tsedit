import * as highlight from 'highlight.js'
import * as MarkdownIt from 'markdown-it'
import * as React from 'react'
import { StatelessComponent } from 'react'

type Props = {
  content: string
}

let markdownIt = MarkdownIt({
  highlight(str, lang) {
    if (lang && highlight.getLanguage(lang)) {
      try {
        return highlight.highlight(lang, str).value
      } catch (e) {}
    }
    return '' // use external default escaping
  },
  html: true,
  typographer: true
})
let render = markdownIt.render.bind(markdownIt)

export let Markdown: StatelessComponent<Props> = ({ content }) =>
  <div className='Markdown' dangerouslySetInnerHTML={{ __html: render(content) }} />
