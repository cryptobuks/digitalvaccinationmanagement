import styled from "styled-components";

const NavWrapper = styled.nav`
  z-index: 999;
  &.bithu_header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 1px;
    height: 90px;
    transition: all 0.3s;

    &.sticky {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(27, 34, 38, 0.8);
      backdrop-filter: blur(15px);
      z-index: 1000;
      margin-top: 0px;
      transition: all 0.2s;
    }
  }

    /////////////////
    // Header
    /////////////////
    .header {
        // width: 100%;
        height: 7.5rem;
        position: relative;
        padding: 0rem;
        background-color: $body-bg;
        z-index: 4;
        // box-shadow: 0 0 1rem $l-border;
        padding-left: 21.563rem;
        transition: all .2s ease;
    @include respond('laptop'){
    padding-left: 17rem;
    }
        // &::before {
        //     content: "";
        //     height: 168px;
        //     top: 0;
        //     left: 0;
        //     width: 100%;
        //     position: absolute;
        //     z-index: 997;
        //     background: rgba(116, 104, 240,0.85)
        // }
        .header-content {
            height: 100%;
            padding-left: 5.3125rem;
            padding-right: 2.4rem;
            align-items: center;
            display: flex;
    
            // box-shadow: $shadow;
            // @include respond('desktop') {
            //     padding-left: 15px;
            //     padding-right:15px;
            //     max-width: 1140px;
            //     margin: 0 auto;
            // }
            // @include respond('tab-land') {
            //     padding-left: 15px;
            //     padding-right:15px;
            //     max-width: 960px;
            //     margin: 0 auto;
            // }
            // @include respond('tab-port') {
            //     padding-left: 15px;
            //     padding-right:15px;
            //     max-width: 720px;
            //     margin: 0 auto;
            // }
            // @include respond('phone-land') {
            //     padding-left: 60px;
            //     padding-right:15px;
            // }
            @include custommq($max: 767px) {
                padding-left: 3.75rem;
    padding-right: 0.938rem;
    border-radius: 0;
            }
        }
        .navbar {
            padding: 0;
            height: 100%;
            width: 100%;
            .navbar-collapse {
                height: 100%;
                width: 100%;
            }
        }
    @include respond('tab-land'){
            height:5rem;
        }
    }
    
    ////////////////////////
    // CSS Pulse Effect
    ////////////////////////
    @mixin circle($circleSize) {
        width: $circleSize;
        height: $circleSize;
        border-radius: $circleSize/2;
    }
    
    
    /* pulse in SVG */
    
    svg.pulse-svg {
        overflow: visible;
        .first-circle {
            -webkit-transform: scale(0.3);
            transform: scale(0.3);
            -webkit-transform-origin: center center;
            transform-origin: center center;
            -webkit-animation: pulse-me 3s linear infinite;
            animation: pulse-me 3s linear infinite;
            fill: $primary;
        }
        .second-circle {
            @extend .first-circle;
            -webkit-animation-delay: 1s;
            animation-delay: 1s;
        }
        .third-circle {
            @extend .first-circle;
            -webkit-animation-delay: 2s;
            animation-delay: 2s;
        }
    }
    
    
    /* pulse in CSS */
    
    .pulse-css {
        @include circle(1rem);
        border-radius: 3.5rem;
        height: 1rem;
        position: absolute;
        background: #FF507A;
        right: 5px;
        top: 5px;
        width: 1rem;
        &:after,
        &:before {
            content: '';
            @include circle(1rem);
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: -.2rem;
            background-color: #FF507A;
            margin: auto;
            -webkit-transform: scale(0.3);
            transform: scale(0.3);
            -webkit-transform-origin: center center;
            transform-origin: center center;
            -webkit-animation: pulse-me 3s linear infinite;
            animation: pulse-me 3s linear infinite;
            @at-root [direction="rtl"] & {
                left: auto;
                right: -.2rem;
            }
        }
    @include respond ('laptop'){
            height:0.5rem;
            width:0.5rem;
        }
    }
    
    @-webkit-keyframes pulse-me {
        0% {
            -webkit-transform: scale(0.3);
            transform: scale(0.3);
            opacity: 0;
        }
        50% {
            opacity: 0.1;
        }
        70% {
            opacity: 0.09;
        }
        100% {
            -webkit-transform: scale(3);
            transform: scale(3);
            opacity: 0;
        }
    }
    
    @keyframes pulse-me {
        0% {
            -webkit-transform: scale(0.3);
            transform: scale(0.3);
            opacity: 0;
        }
        50% {
            opacity: 0.1;
        }
        70% {
            opacity: 0.09;
        }
        100% {
            -webkit-transform: scale(3);
            transform: scale(3);
            opacity: 0;
        }
    }
    
    [data-sidebar-style="full"],
    [data-sidebar-style="overlay"] {
        .header {
            width: 100%;
            @include custommq($min: 1200px, $max: 1350px) {
                width: 100%;
                padding-left: 17rem;
            }
            @include respond('tab-land') {
                width: 100%;
                padding-left: 5rem;
            }
        }
    }
    
    [data-sidebar-style="mini"] {
        .header {
            width: 100%;
            padding-left: 5rem;
        }
    }
    
    [data-sidebar-style="compact"] {
        .header {
            width: 100%;
            padding-left: 15rem;
            .header-content{
                padding-left: 2.4rem;
            }
        }
    }
    
    [data-header-position="fixed"] {
        .header {
            position: fixed;
            top: 0;
            width: 100%;
        }
        .content-body {
            //padding-top: 7.5rem;
            @include respond('tab-land'){
                padding-top: 5rem;
            }
        }
        .deznav {
            margin-top: 0;
        }
    }
    [data-sidebar-style="compact"][data-header-position="fixed"][data-container="boxed"][data-layout="vertical"] {
        .header {
            width: 1199px;
        }
    }
    [data-sidebar-style="modern"] {
        .header {
            width: 100%;
            padding-left: 9.375rem;
        }
        &[data-layout="horizontal"] {
            .nav-header .brand-logo{
            justify-content: start;
        }
        .header .header-content{
            padding-left: 30px;
        }
    }
}
`;

export default NavWrapper;
