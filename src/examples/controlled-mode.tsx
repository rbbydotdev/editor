import React, { Fragment } from 'react'
import {
  BoldItalicUnderlineHighlightToggles,
  DiffSourceToggleWrapper,
  ListsToggle,
  MDXEditor,
  diffSourcePlugin,
  headingsPlugin,
  listsPlugin,
  toolbarPlugin
} from '../'

export function App() {
  const [markdown, setMarkdown] = React.useState('# Hi there, world')
  return (
    <div>
      <MDXEditor
        markdown={markdown}
        onChange={setMarkdown}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          diffSourcePlugin({ viewMode: 'diff' }),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <BoldItalicUnderlineHighlightToggles />
                <ListsToggle />
                <DiffSourceToggleWrapper>
                  <Fragment />
                </DiffSourceToggleWrapper>
              </>
            )
          })
        ]}
      />
    </div>
  )
}
