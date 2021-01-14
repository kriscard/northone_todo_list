import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 200px auto 400px;
`

export const Sidebar = styled.div`
  grid-row: 1;
  height: 100vh;
  background-color: #f3f4f7;
`

export const MainContent = styled.div`
  grid-row: 1;
  height: 100vh;
`

export const Description = styled.div`
  grid-row: 1;
  height: 100vh;
`
