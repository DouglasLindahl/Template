'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styled from 'styled-components'
import React from 'react'

const StyledBreadcrumbs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  top: 0;
  left: 0;
`

const Separator = styled.span`
  margin: 0 5px;
`

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)

  return (
    <StyledBreadcrumbs>
      <Link href="/">Home</Link>
      {pathSegments.map((segment, index) => (
        <React.Fragment key={index}>
          <Separator> / </Separator>
          <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
            {segment}
          </Link>
        </React.Fragment>
      ))}
    </StyledBreadcrumbs>
  )
}

export default Breadcrumbs
