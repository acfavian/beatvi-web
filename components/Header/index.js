import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'

const Li = styled.li`
  padding: 5px 0;
  cursor: pointer;
`
const Anchor = styled.a`
  display: block;
  width: inherit;
`



const ServiciosNavigator = ({ className, children }) => {
  return (
    <div className={className}>
      <Li><Link href="./servicios/formativas"><Anchor>Formativas</Anchor></Link></Li>
      <Li><Link href="./servicios/exploraciones"><Anchor>Exploraciones</Anchor></Link></Li>
      <Li><Link href="./servicios/idi"><Anchor>Investigación Desarrollo e Innovación</Anchor></Link></Li>
      <Li><Link href="./servicios/cumple-cientifico"><Anchor>Cumpleaños Científico</Anchor></Link></Li>
      {children}
    </div>
  )
}

const StyleHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--padding-desktop-1200);
  padding-top: 15px;
`
const ImageLogoContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 200px;
  cursor: pointer;
`
const TitleBrand = styled.span`
  font-family: 'Rubik';
  font-size: 2rem;
  font-weight: 800;
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  justify-content: space-between;
  font-size: 1.8rem;
  position: relative;
`
const ButtonNavigator = styled.button`
  all: unset;
  cursor: pointer;
`
const StyleServiciosNavigator = styled(ServiciosNavigator)`
  display: flex;
  flex-direction: column;
  position: absolute;

  top: 60px;
  left: -30%;

  text-align: center;
  padding: 0 20px;
  background-color: var(--brand-yellow-color);

  animation: fade 1s;
  @keyframes fade {
    from {opacity: 0}
    to {opacity: 1}
  }
`

export default function Header () {
  const [isNavServicesActive, setIsNavServicesActive] = useState(false)
  const handlerClick = () => {
    setIsNavServicesActive(!isNavServicesActive)
  }
  return (
    <>
      <header>
        <StyleHeaderContainer>
          <Link href="./">
            <ImageLogoContainer>
              <Image src="/beatvi-logo.png" width={50} height={50} />
              <TitleBrand>Beatvi</TitleBrand>
            </ImageLogoContainer>
          </Link>   
          <Nav>
            <ButtonNavigator onClick={handlerClick}>Servicios educativos</ButtonNavigator>
            {isNavServicesActive ? <StyleServiciosNavigator /> : '' }
            <li><Link href="./../nosotros"><a>Nosotros</a></Link></li>
          </Nav>
        </StyleHeaderContainer>
      </header>
    </>
  )
}