import React, {type ReactNode} from 'react';
import Heading from '@theme/Heading';
import type {Props} from '@theme/MDXComponents/Heading';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import BrowserOnly from '@docusaurus/BrowserOnly';

// Define PageDescription component inline to avoid import issues
function PageDescription({ description }: { description: string }) {
  // Don't show if no description, empty, or auto-generated default
  if (!description || 
      description.trim() === '' || 
      description === "Description will go into a meta tag in <head />" ||
      description.length > 200) { // Skip auto-generated long descriptions
    return null;
  }
  
  return (
    <div className="article-description">
      {description}
    </div>
  );
}

// Component that uses the hook safely
function DescriptionAfterH1() {
  try {
    const { metadata, frontMatter } = useDoc();
    
    // Only show description if explicitly defined in frontmatter
    // This prevents auto-generated descriptions from showing
    if (frontMatter?.description && typeof frontMatter.description === 'string') {
      return <PageDescription description={frontMatter.description} />;
    }
  } catch (error) {
    // Hook not available in this context
  }
  return null;
}

export default function MDXHeading(props: Props): ReactNode {
  const isH1 = props.as === 'h1';

  return (
    <>
      <Heading {...props} />
      {isH1 && (
        <BrowserOnly>
          {() => <DescriptionAfterH1 />}
        </BrowserOnly>
      )}
    </>
  );
}
