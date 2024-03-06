import { View } from 'react-native';
import {
    Svg,
    Path,
    G,
    SvgProps,
    Circle,
    Defs,
    Rect,
    ClipPath,
} from 'react-native-svg';


export function Interlining(props: SvgProps) {
    return (
        <Svg
            width={props.width ?? "24"}
            height={props.height ?? "24"}
            viewBox="0 0 28 28"
            fill="none"
        >
            <G clipPath="url(#clip0_486_33761)">
                <Path
                    fill="#374957"
                    d="M10 6.00024H23C23.2652 6.00024 23.5196 5.89488 23.7071 5.70735C23.8946 5.51981 24 5.26546 24 5.00024C24 4.73503 23.8946 4.48067 23.7071 4.29314C23.5196 4.1056 23.2652 4.00024 23 4.00024H10C9.73478 4.00024 9.48043 4.1056 9.29289 4.29314C9.10536 4.48067 9 4.73503 9 5.00024C9 5.26546 9.10536 5.51981 9.29289 5.70735C9.48043 5.89488 9.73478 6.00024 10 6.00024Z"
                />
                <Path
                    fill="#374957"
                    d="M23 10.9998H10C9.73478 10.9998 9.48043 11.1051 9.29289 11.2927C9.10536 11.4802 9 11.7345 9 11.9998C9 12.265 9.10536 12.5193 9.29289 12.7069C9.48043 12.8944 9.73478 12.9998 10 12.9998H23C23.2652 12.9998 23.5196 12.8944 23.7071 12.7069C23.8946 12.5193 24 12.265 24 11.9998C24 11.7345 23.8946 11.4802 23.7071 11.2927C23.5196 11.1051 23.2652 10.9998 23 10.9998Z"
                />
                <Path
                    fill="#374957"
                    d="M23 18H10C9.73478 18 9.48043 18.1054 9.29289 18.2929C9.10536 18.4804 9 18.7348 9 19C9 19.2652 9.10536 19.5196 9.29289 19.7071C9.48043 19.8947 9.73478 20 10 20H23C23.2652 20 23.5196 19.8947 23.7071 19.7071C23.8946 19.5196 24 19.2652 24 19C24 18.7348 23.8946 18.4804 23.7071 18.2929C23.5196 18.1054 23.2652 18 23 18Z"
                />
                <Path
                    fill="#374957"
                    d="M6.08692 6.00034C6.18585 6.00032 6.28256 5.97094 6.36479 5.91594C6.44703 5.86094 6.5111 5.78277 6.54889 5.69134C6.58669 5.59991 6.59651 5.49932 6.57711 5.4023C6.55771 5.30529 6.50996 5.21621 6.43992 5.14634L3.99992 2.70734C3.81239 2.51987 3.55808 2.41455 3.29292 2.41455C3.02775 2.41455 2.77345 2.51987 2.58592 2.70734L0.146918 5.14634C0.076872 5.21621 0.0291282 5.30529 0.00972972 5.4023C-0.00966876 5.49932 0.000150092 5.59991 0.0379436 5.69134C0.075737 5.78277 0.139806 5.86094 0.222042 5.91594C0.304277 5.97094 0.400983 6.00032 0.499918 6.00034H2.29392V18.0003H0.499918C0.400898 18.0002 0.304054 18.0294 0.221665 18.0843C0.139276 18.1392 0.0750515 18.2174 0.0371339 18.3089C-0.000783589 18.4003 -0.0106867 18.501 0.00868009 18.5981C0.0280469 18.6952 0.0758114 18.7844 0.145918 18.8543L2.58592 21.2933C2.77345 21.4808 3.02775 21.5861 3.29292 21.5861C3.55808 21.5861 3.81239 21.4808 3.99992 21.2933L6.43992 18.8543C6.50996 18.7845 6.55771 18.6954 6.57711 18.5984C6.59651 18.5014 6.58669 18.4008 6.54889 18.3093C6.5111 18.2179 6.44703 18.1397 6.36479 18.0847C6.28256 18.0297 6.18585 18.0004 6.08692 18.0003H4.29392V6.00034H6.08692Z"
                />
            </G>
        </Svg>
    )
}


export function Gem(props: SvgProps) {
    return (
        <Svg
            width={props.width ?? "22"} height={props.height ?? "22"}
            viewBox="0 0 28 28"
            fill="none"
        >
            <G clipPath="url(#clip0_486_33725)">
                <Path d="M23.1469 9.471L22.3599 8.4C21.8146 7.65793 21.1027 7.0542 20.2815 6.63736C19.4603 6.22052 18.5528 6.00222 17.6319 6H6.38291C5.48093 6.00236 4.59153 6.21176 3.78326 6.61209C2.97498 7.01241 2.26941 7.59296 1.72091 8.309L0.899905 9.383C0.233387 10.2623 -0.0799862 11.3592 0.0214262 12.4579C0.122839 13.5566 0.631696 14.5776 1.44791 15.32L9.43791 23.027C10.1397 23.6528 11.0476 23.9979 11.9879 23.996C12.9481 23.9941 13.8739 23.638 14.5879 22.996L22.5239 15.363C23.3448 14.6361 23.864 13.6283 23.9793 12.5379C24.0945 11.4476 23.7976 10.3535 23.1469 9.471ZM20.7469 9.578L21.5339 10.652C21.613 10.7619 21.6826 10.8783 21.7419 11H16.9509C16.8785 10.5211 16.7538 10.0516 16.5789 9.6L15.9389 8H17.6319C18.2384 8.00115 18.8361 8.1445 19.3771 8.41856C19.9181 8.69261 20.3872 9.08973 20.7469 9.578ZM11.9899 20.088L9.22091 13.818C9.12075 13.5528 9.0451 13.279 8.99491 13H14.9469C14.905 13.2199 14.8461 13.4362 14.7709 13.647L11.9899 20.088ZM9.09991 11C9.14173 10.8207 9.19415 10.6441 9.25691 10.471L10.2409 8H13.7849L14.7219 10.343C14.8042 10.5569 14.871 10.7765 14.9219 11H9.09991ZM3.31091 9.521C3.67247 9.04935 4.13744 8.66695 4.67003 8.40326C5.20262 8.13957 5.78861 8.00161 6.38291 8H8.08291L7.39991 9.729C7.23512 10.1392 7.11216 10.5651 7.03291 11H2.24491C2.31349 10.8587 2.39625 10.7246 2.49191 10.6L3.31091 9.521ZM2.81091 13.854C2.55003 13.6174 2.34508 13.3257 2.21091 13H6.98291C7.04923 13.5388 7.17913 14.0678 7.36991 14.576L10.1969 20.976L2.81091 13.854ZM13.7709 21.014L16.6249 14.4C16.7906 13.9474 16.9059 13.4779 16.9689 13H21.7999C21.6584 13.3433 21.4421 13.6507 21.1669 13.9L13.7709 21.014Z" fill="#374957" />
                <Path d="M11.9999 4C12.2652 4 12.5195 3.89464 12.7071 3.70711C12.8946 3.51957 13 3.26522 13 3V1C13 0.734784 12.8946 0.48043 12.7071 0.292893C12.5195 0.105357 12.2652 0 11.9999 0C11.7347 0 11.4804 0.105357 11.2928 0.292893C11.1053 0.48043 10.9999 0.734784 10.9999 1V3C10.9999 3.26522 11.1053 3.51957 11.2928 3.70711C11.4804 3.89464 11.7347 4 11.9999 4Z" fill="#374957" />
                <Path d="M16.5529 3.89993C16.671 3.95929 16.7996 3.99466 16.9314 4.004C17.0633 4.01334 17.1956 3.99646 17.3209 3.95434C17.4461 3.91222 17.5618 3.84568 17.6612 3.75859C17.7606 3.6715 17.8417 3.56557 17.8999 3.44693L18.8999 1.44693C19.0185 1.20956 19.0379 0.934819 18.9538 0.683146C18.8698 0.431472 18.6893 0.223481 18.4519 0.10493C18.2145 -0.0136223 17.9398 -0.0330241 17.6881 0.0509922C17.4364 0.135009 17.2285 0.315561 17.1099 0.552929L16.1099 2.55293C16.0502 2.67039 16.0143 2.7985 16.0042 2.92989C15.9942 3.06127 16.0102 3.19335 16.0514 3.31852C16.0925 3.4437 16.158 3.5595 16.2441 3.65928C16.3302 3.75906 16.4351 3.84084 16.5529 3.89993Z" fill="#374957" />
                <Path d="M6.10503 3.44693C6.22358 3.68496 6.43183 3.86615 6.68397 3.95063C6.93612 4.03512 7.21149 4.01598 7.44953 3.89743C7.68756 3.77888 7.86875 3.57062 7.95323 3.31848C8.03772 3.06634 8.01858 2.79096 7.90003 2.55293L6.90003 0.552929C6.84133 0.435396 6.76005 0.330576 6.66084 0.244454C6.56163 0.158331 6.44643 0.0925929 6.32181 0.0509922C6.07014 -0.0330241 5.79539 -0.0136223 5.55803 0.10493C5.32066 0.223481 5.1401 0.431472 5.05609 0.683146C4.97207 0.934819 4.99147 1.20956 5.11003 1.44693L6.10503 3.44693Z" fill="#374957" />
            </G>
        </Svg>

    )
}

export function BoxAlt(props: SvgProps) {
    return (
        <Svg
            width={props.width ?? "22"} height={props.height ?? "22"}
            viewBox="0 0 28 28"
            fill="none"
        >
            <G clipPath="url(#clip0_486_33572)">
                <Path
                    fill="#374957"
                    d="M19 0H5C3.67441 0.00158786 2.40356 0.528882 1.46622 1.46622C0.528882 2.40356 0.00158786 3.67441 0 5L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H19C20.3256 23.9984 21.5964 23.4711 22.5338 22.5338C23.4711 21.5964 23.9984 20.3256 24 19V5C23.9984 3.67441 23.4711 2.40356 22.5338 1.46622C21.5964 0.528882 20.3256 0.00158786 19 0V0ZM22 5H15V2H19C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5ZM11 2H13V7C13 7.26522 12.8946 7.51957 12.7071 7.70711C12.5196 7.89464 12.2652 8 12 8C11.7348 8 11.4804 7.89464 11.2929 7.70711C11.1054 7.51957 11 7.26522 11 7V2ZM5 2H9V5H2C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2ZM19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V7H9C9 7.79565 9.31607 8.55871 9.87868 9.12132C10.4413 9.68393 11.2044 10 12 10C12.7956 10 13.5587 9.68393 14.1213 9.12132C14.6839 8.55871 15 7.79565 15 7H22V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H16C15.7348 20 15.4804 19.8946 15.2929 19.7071C15.1054 19.5196 15 19.2652 15 19C15 18.7348 15.1054 18.4804 15.2929 18.2929C15.4804 18.1054 15.7348 18 16 18H19C19.2652 18 19.5196 18.1054 19.7071 18.2929C19.8946 18.4804 20 18.7348 20 19Z"
                />
            </G>
        </Svg>

    )
}

export function ArrowLeft(props: SvgProps) {
    return (
        <Svg
            width={props.width ?? "22"} height={props.height ?? "22"}
            viewBox="0 0 28 28"
            fill="none"
        >
            <Path
                fill={props.color ?? "#374957"}
                d="M19 10.9999H9L12.29 7.70994C12.3837 7.61697 12.4581 7.50637 12.5089 7.38451C12.5597 7.26265 12.5858 7.13195 12.5858 6.99994C12.5858 6.86793 12.5597 6.73722 12.5089 6.61536C12.4581 6.4935 12.3837 6.3829 12.29 6.28994C12.1026 6.10369 11.8492 5.99915 11.585 5.99915C11.3208 5.99915 11.0674 6.10369 10.88 6.28994L6.59 10.5899C6.21441 10.9633 6.00223 11.4704 6 11.9999C6.00487 12.526 6.21684 13.029 6.59 13.3999L10.88 17.6999C10.9732 17.7925 11.0838 17.8658 11.2054 17.9157C11.3269 17.9655 11.4571 17.9909 11.5885 17.9905C11.7199 17.99 11.8499 17.9637 11.9712 17.913C12.0924 17.8623 12.2024 17.7882 12.295 17.6949C12.3876 17.6017 12.4609 17.4911 12.5107 17.3696C12.5606 17.248 12.586 17.1178 12.5856 16.9864C12.5851 16.855 12.5588 16.725 12.508 16.6038C12.4573 16.4825 12.3832 16.3725 12.29 16.2799L9 12.9999H19C19.2652 12.9999 19.5196 12.8946 19.7071 12.707C19.8946 12.5195 20 12.2651 20 11.9999C20 11.7347 19.8946 11.4804 19.7071 11.2928C19.5196 11.1053 19.2652 10.9999 19 10.9999Z"
            />
        </Svg>
    )
}

export function ShoppingBag(props: SvgProps) {
    return (
        <Svg
            width={props.width ?? "22"} height={props.height ?? "22"}
            viewBox="0 0 28 28"
            fill="none"
        >
            <G clipPath="url(#clip0_486_33903)">
                <Path
                    fill={props.color ?? "#374957"}
                    d="M21 6H18C18 4.4087 17.3679 2.88258 16.2426 1.75736C15.1174 0.632141 13.5913 0 12 0C10.4087 0 8.88258 0.632141 7.75736 1.75736C6.63214 2.88258 6 4.4087 6 6H3C2.20435 6 1.44129 6.31607 0.87868 6.87868C0.31607 7.44129 0 8.20435 0 9L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H19C20.3256 23.9984 21.5964 23.4711 22.5338 22.5338C23.4711 21.5964 23.9984 20.3256 24 19V9C24 8.20435 23.6839 7.44129 23.1213 6.87868C22.5587 6.31607 21.7956 6 21 6ZM12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6H8C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2ZM22 19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V9C2 8.73478 2.10536 8.48043 2.29289 8.29289C2.48043 8.10536 2.73478 8 3 8H6V10C6 10.2652 6.10536 10.5196 6.29289 10.7071C6.48043 10.8946 6.73478 11 7 11C7.26522 11 7.51957 10.8946 7.70711 10.7071C7.89464 10.5196 8 10.2652 8 10V8H16V10C16 10.2652 16.1054 10.5196 16.2929 10.7071C16.4804 10.8946 16.7348 11 17 11C17.2652 11 17.5196 10.8946 17.7071 10.7071C17.8946 10.5196 18 10.2652 18 10V8H21C21.2652 8 21.5196 8.10536 21.7071 8.29289C21.8946 8.48043 22 8.73478 22 9V19Z"
                />
            </G>
        </Svg>

    )
}

export function FileIcon(props: SvgProps) {
    return (
        <Svg
            width={props.width ?? "24"} height={props.height ?? "24"}
            viewBox="0 0 28 28"
            fill="none"
        >
            <G clipPath="url(#clip0_486_33701)">
                <Path
                    fill={props.color ?? "#374957"}
                    d="M19.9491 5.53651L16.4651 2.05051C15.8164 1.39865 15.045 0.881842 14.1953 0.529971C13.3457 0.178099 12.4347 -0.0018556 11.5151 0.00051133H7.00012C5.67453 0.00209919 4.40368 0.529393 3.46634 1.46673C2.529 2.40407 2.00171 3.67492 2.00012 5.00051V19.0005C2.00171 20.3261 2.529 21.597 3.46634 22.5343C4.40368 23.4716 5.67453 23.9989 7.00012 24.0005H17.0001C18.3257 23.9989 19.5966 23.4716 20.5339 22.5343C21.4712 21.597 21.9985 20.3261 22.0001 19.0005V10.4855C22.0026 9.56593 21.8226 8.655 21.4705 7.80549C21.1185 6.95597 20.6014 6.18475 19.9491 5.53651ZM18.5351 6.95051C18.8405 7.26466 19.1031 7.6177 19.3161 8.00051H15.0001C14.7349 8.00051 14.4806 7.89515 14.293 7.70762C14.1055 7.52008 14.0001 7.26573 14.0001 7.00051V2.68451C14.3831 2.89744 14.7364 3.15967 15.0511 3.46451L18.5351 6.95051ZM20.0001 19.0005C20.0001 19.7962 19.6841 20.5592 19.1214 21.1218C18.5588 21.6844 17.7958 22.0005 17.0001 22.0005H7.00012C6.20447 22.0005 5.44141 21.6844 4.8788 21.1218C4.31619 20.5592 4.00012 19.7962 4.00012 19.0005V5.00051C4.00012 4.20486 4.31619 3.4418 4.8788 2.87919C5.44141 2.31658 6.20447 2.00051 7.00012 2.00051H11.5151C11.6791 2.00051 11.8381 2.03251 12.0001 2.04751V7.00051C12.0001 7.79616 12.3162 8.55922 12.8788 9.12183C13.4414 9.68444 14.2045 10.0005 15.0001 10.0005H19.9531C19.9681 10.1625 20.0001 10.3205 20.0001 10.4855V19.0005Z"
                />
            </G>
        </Svg>
    )
}

export function StarIcon(props: SvgProps) {
    return (
        <Svg
            width={props.width ?? "24"} height={props.height ?? "24"}
            viewBox="0 0 28 28"
            fill="none"
        >
            <G clip-path="url(#clip0_486_33930)">
                <Path
                    fill={props.color ?? "#374957"}
                    d="M23.8358 8.79432C23.6312 8.14322 23.2226 7.57523 22.6702 7.17435C22.1179 6.77348 21.4512 6.56099 20.7688 6.56832H16.3998L15.0728 2.43232C14.8641 1.78128 14.4541 1.21333 13.9018 0.810386C13.3495 0.407437 12.6835 0.190308 11.9998 0.190308C11.3161 0.190308 10.6501 0.407437 10.0978 0.810386C9.54553 1.21333 9.13547 1.78128 8.9268 2.43232L7.5998 6.56832H3.2308C2.55054 6.56929 1.88799 6.7852 1.33778 7.18523C0.787564 7.58525 0.377837 8.14891 0.167118 8.79571C-0.0436018 9.44251 -0.0445344 10.1394 0.164453 10.7867C0.37344 11.4341 0.781657 11.9988 1.3308 12.4003L4.8868 15.0003L3.5348 19.1873C3.31631 19.8367 3.31354 20.5393 3.52691 21.1904C3.74027 21.8415 4.15834 22.4062 4.7188 22.8003C5.26965 23.2071 5.93719 23.425 6.62195 23.4216C7.30671 23.4182 7.97204 23.1936 8.5188 22.7813L11.9998 20.2193L15.4818 22.7783C16.0317 23.1828 16.6956 23.4025 17.3782 23.4058C18.0607 23.4091 18.7268 23.1959 19.2806 22.7968C19.8343 22.3978 20.2473 21.8334 20.4601 21.1848C20.6729 20.5362 20.6745 19.8369 20.4648 19.1873L19.1128 15.0003L22.6728 12.4003C23.2282 12.0039 23.6412 11.4391 23.8507 10.7897C24.0601 10.1402 24.0549 9.44058 23.8358 8.79432ZM21.4928 10.7853L17.3488 13.8143C17.1786 13.9385 17.0519 14.1132 16.9869 14.3137C16.9219 14.5141 16.9219 14.7299 16.9868 14.9303L18.5618 19.8003C18.6415 20.0473 18.6408 20.3132 18.5599 20.5598C18.4789 20.8064 18.3218 21.021 18.1112 21.1727C17.9006 21.3244 17.6474 21.4054 17.3878 21.4041C17.1283 21.4028 16.8758 21.3192 16.6668 21.1653L12.5918 18.1653C12.4202 18.0392 12.2128 17.9713 11.9998 17.9713C11.7868 17.9713 11.5794 18.0392 11.4078 18.1653L7.3328 21.1653C7.12388 21.3212 6.87073 21.4066 6.61006 21.4089C6.34939 21.4113 6.09474 21.3306 5.88303 21.1785C5.67131 21.0264 5.51354 20.8108 5.43259 20.563C5.35164 20.3152 5.35171 20.0481 5.4328 19.8003L7.0128 14.9303C7.07771 14.7299 7.07766 14.5141 7.01266 14.3137C6.94765 14.1132 6.82101 13.9385 6.6508 13.8143L2.5068 10.7853C2.2981 10.6325 2.14303 10.4177 2.06374 10.1715C1.98444 9.92526 1.98498 9.6603 2.06528 9.41442C2.14558 9.16854 2.30152 8.95433 2.51084 8.80237C2.72016 8.65042 2.97214 8.5685 3.2308 8.56832H8.3308C8.54251 8.56831 8.74876 8.50111 8.91984 8.3764C9.09093 8.25168 9.21801 8.07588 9.2828 7.87432L10.8328 3.04332C10.9124 2.79611 11.0683 2.58051 11.2782 2.42757C11.4881 2.27463 11.7411 2.19223 12.0008 2.19223C12.2605 2.19223 12.5135 2.27463 12.7234 2.42757C12.9333 2.58051 13.0892 2.79611 13.1688 3.04332L14.7188 7.87432C14.7836 8.07588 14.9107 8.25168 15.0817 8.3764C15.2528 8.50111 15.4591 8.56831 15.6708 8.56832H20.7708C21.0295 8.5685 21.2814 8.65042 21.4908 8.80237C21.7001 8.95433 21.856 9.16854 21.9363 9.41442C22.0166 9.6603 22.0171 9.92526 21.9379 10.1715C21.8586 10.4177 21.7035 10.6325 21.4948 10.7853H21.4928Z"
                />
            </G>
        </Svg>
    )
}

export function InboxIcon(props: SvgProps) {
    return (
        <Svg
            width={props.width ?? "24"} height={props.height ?? "24"}
            viewBox="0 0 28 28"
            fill="none"
        >
            <G clip-path="url(#clip0_486_33755)">
                <Path
                    fill={props.color ?? "#374957"}
                    d="M21 12H18C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H10C9.46957 16 8.96086 15.7893 8.58579 15.4142C8.21071 15.0391 8 14.5304 8 14C8 13.4696 7.78929 12.9609 7.41421 12.5858C7.03914 12.2107 6.53043 12 6 12H3C2.20435 12 1.44129 12.3161 0.87868 12.8787C0.31607 13.4413 0 14.2044 0 15L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H19C20.3256 23.9984 21.5964 23.4711 22.5338 22.5338C23.4711 21.5964 23.9984 20.3256 24 19V15C24 14.2044 23.6839 13.4413 23.1213 12.8787C22.5587 12.3161 21.7956 12 21 12ZM22 19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V15C2 14.7348 2.10536 14.4804 2.29289 14.2929C2.48043 14.1054 2.73478 14 3 14H6C6 15.0609 6.42143 16.0783 7.17157 16.8284C7.92172 17.5786 8.93913 18 10 18H14C15.0609 18 16.0783 17.5786 16.8284 16.8284C17.5786 16.0783 18 15.0609 18 14H21C21.2652 14 21.5196 14.1054 21.7071 14.2929C21.8946 14.4804 22 14.7348 22 15V19Z"
                />
                <Path
                    fill={props.color ?? "#374957"}
                    d="M2.99994 9.99963H20.9999C21.2652 9.99963 21.5195 9.89427 21.707 9.70674C21.8946 9.5192 21.9999 9.26485 21.9999 8.99963C21.9999 8.73442 21.8946 8.48006 21.707 8.29253C21.5195 8.10499 21.2652 7.99963 20.9999 7.99963H2.99994C2.73472 7.99963 2.48037 8.10499 2.29283 8.29253C2.1053 8.48006 1.99994 8.73442 1.99994 8.99963C1.99994 9.26485 2.1053 9.5192 2.29283 9.70674C2.48037 9.89427 2.73472 9.99963 2.99994 9.99963Z"
                />
                <Path
                    fill={props.color ?? "#374957"}
                    d="M2.99994 6.00024H20.9999C21.2652 6.00024 21.5195 5.89488 21.707 5.70735C21.8946 5.51981 21.9999 5.26546 21.9999 5.00024C21.9999 4.73503 21.8946 4.48067 21.707 4.29314C21.5195 4.1056 21.2652 4.00024 20.9999 4.00024H2.99994C2.73472 4.00024 2.48037 4.1056 2.29283 4.29314C2.1053 4.48067 1.99994 4.73503 1.99994 5.00024C1.99994 5.26546 2.1053 5.51981 2.29283 5.70735C2.48037 5.89488 2.73472 6.00024 2.99994 6.00024Z"
                />
            </G>
        </Svg>
    )
}

export function PaperPlane(props: SvgProps) {
    return (
        <Svg
            width={props.width ?? "24"} height={props.height ?? "24"}
            viewBox="0 0 28 28"
            fill="none"
        >
            <G clipPath="url(#clip0_486_33828)">
                <Path
                    fill={props.color ?? "#374957"}
                    d="M23.1189 0.882014C22.7604 0.519141 22.3144 0.254869 21.8239 0.11473C21.3334 -0.0254085 20.815 -0.0366769 20.3189 0.0820139L4.31893 3.45201C3.39751 3.57838 2.52967 3.95949 1.81314 4.55243C1.09661 5.14536 0.559847 5.92657 0.263309 6.80808C-0.0332293 7.68959 -0.0777688 8.63638 0.134706 9.54183C0.347181 10.4473 0.808231 11.2754 1.46593 11.933L3.18393 13.65C3.27692 13.743 3.35066 13.8534 3.40094 13.9748C3.45121 14.0963 3.47704 14.2265 3.47693 14.358V17.526C3.47914 17.9714 3.58168 18.4107 3.77693 18.811L3.76893 18.818L3.79493 18.844C4.08795 19.4331 4.56652 19.9096 5.15693 20.2L5.18293 20.226L5.18993 20.218C5.59029 20.4133 6.0295 20.5158 6.47493 20.518H9.64293C9.90799 20.5178 10.1623 20.6228 10.3499 20.81L12.0669 22.527C12.5275 22.9926 13.0756 23.3625 13.6797 23.6153C14.2838 23.8681 14.932 23.9989 15.5869 24C16.1327 23.9993 16.6747 23.9102 17.1919 23.736C18.0654 23.4492 18.8413 22.924 19.4322 22.2197C20.023 21.5154 20.4053 20.66 20.5359 19.75L23.9109 3.71501C24.0358 3.21465 24.0284 2.69043 23.8896 2.19378C23.7507 1.69712 23.4852 1.24508 23.1189 0.882014ZM4.59993 12.238L2.88093 10.521C2.48065 10.1304 2.20011 9.63366 2.07222 9.08917C1.94433 8.54468 1.97442 7.97501 2.15893 7.44701C2.33783 6.90534 2.66854 6.42644 3.11173 6.06728C3.55492 5.70811 4.09195 5.4838 4.65893 5.42101L20.4999 2.08601L5.47493 17.113V14.358C5.47645 13.9644 5.3999 13.5743 5.24971 13.2104C5.09951 12.8465 4.87867 12.516 4.59993 12.238ZM18.5709 19.408C18.4942 19.9604 18.2649 20.4804 17.909 20.9097C17.5531 21.339 17.0846 21.6606 16.5561 21.8384C16.0275 22.0162 15.4599 22.0431 14.9169 21.9163C14.3738 21.7894 13.8769 21.5136 13.4819 21.12L11.7619 19.4C11.4843 19.1209 11.1541 18.8995 10.7904 18.7488C10.4266 18.5981 10.0366 18.521 9.64293 18.522H6.88793L21.9149 3.50001L18.5709 19.408Z"
                />
            </G>
        </Svg>
    )
}

export function DeletedFile(props: SvgProps) {
    return (
        <Svg
            width={props.width ?? "24"} height={props.height ?? "24"}
            viewBox="0 0 28 28"
            fill="none"
        >
            <G clipPath="url(#clip0_486_33696)">
                <Path
                    fill={props.color ?? "#374957"}
                    d="M15.2069 14.2075L13.4139 16.0005L15.2069 17.7935C15.3024 17.8858 15.3786 17.9961 15.431 18.1181C15.4834 18.2401 15.511 18.3713 15.5122 18.5041C15.5133 18.6369 15.488 18.7686 15.4378 18.8915C15.3875 19.0144 15.3132 19.126 15.2193 19.2199C15.1254 19.3138 15.0138 19.3881 14.8909 19.4383C14.768 19.4886 14.6363 19.5139 14.5035 19.5128C14.3708 19.5116 14.2395 19.484 14.1175 19.4316C13.9955 19.3792 13.8852 19.303 13.7929 19.2075L11.9999 17.4145L10.2069 19.2075C10.0183 19.3897 9.76573 19.4905 9.50354 19.4882C9.24134 19.4859 8.99053 19.3807 8.80512 19.1953C8.61971 19.0099 8.51454 18.7591 8.51227 18.4969C8.50999 18.2347 8.61078 17.9821 8.79294 17.7935L10.5859 16.0005L8.79294 14.2075C8.61078 14.0189 8.50999 13.7663 8.51227 13.5041C8.51454 13.2419 8.61971 12.9911 8.80512 12.8057C8.99053 12.6203 9.24134 12.5151 9.50354 12.5128C9.76573 12.5106 10.0183 12.6114 10.2069 12.7935L11.9999 14.5865L13.7929 12.7935C13.9815 12.6114 14.2341 12.5106 14.4963 12.5128C14.7585 12.5151 15.0093 12.6203 15.1948 12.8057C15.3802 12.9911 15.4853 13.2419 15.4876 13.5041C15.4899 13.7663 15.3891 14.0189 15.2069 14.2075ZM21.9999 10.4855V19.0005C21.9984 20.3261 21.4711 21.597 20.5337 22.5343C19.5964 23.4716 18.3255 23.9989 16.9999 24.0005H6.99994C5.67434 23.9989 4.4035 23.4716 3.46616 22.5343C2.52882 21.597 2.00153 20.3261 1.99994 19.0005V5.00051C2.00153 3.67492 2.52882 2.40407 3.46616 1.46673C4.4035 0.529393 5.67434 0.00209919 6.99994 0.00051133H11.5149C12.4346 -0.0018556 13.3455 0.178099 14.1952 0.529971C15.0448 0.881842 15.8163 1.39865 16.4649 2.05051L19.9489 5.53651C20.6012 6.18475 21.1183 6.95597 21.4704 7.80549C21.8224 8.655 22.0024 9.56593 21.9999 10.4855ZM15.0509 3.46451C14.7362 3.15967 14.3829 2.89744 13.9999 2.68451V7.00051C13.9999 7.26573 14.1053 7.52008 14.2928 7.70762C14.4804 7.89515 14.7347 8.00051 14.9999 8.00051H19.3159C19.1029 7.6177 18.8403 7.26466 18.5349 6.95051L15.0509 3.46451ZM19.9999 10.4855C19.9999 10.3205 19.9679 10.1625 19.9529 10.0005H14.9999C14.2043 10.0005 13.4412 9.68444 12.8786 9.12183C12.316 8.55922 11.9999 7.79616 11.9999 7.00051V2.04751C11.8379 2.03251 11.6789 2.00051 11.5149 2.00051H6.99994C6.20429 2.00051 5.44123 2.31658 4.87862 2.87919C4.31601 3.4418 3.99994 4.20486 3.99994 5.00051V19.0005C3.99994 19.7962 4.31601 20.5592 4.87862 21.1218C5.44123 21.6844 6.20429 22.0005 6.99994 22.0005H16.9999C17.7956 22.0005 18.5587 21.6844 19.1213 21.1218C19.6839 20.5592 19.9999 19.7962 19.9999 19.0005V10.4855Z"
                />
            </G>
        </Svg>
    )
}

export function SquareIcon(props: SvgProps) {
    return (
        <Svg
            width={props.width ?? "24"} height={props.height ?? "24"}
            viewBox="0 0 28 28"
            fill="none"
        >
            <G clipPath="url(#clip0_486_33928)">
                <Path
                    fill={props.color ?? "#374957"}
                    d="M19 0H5C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5L0 19C0 19.6566 0.129329 20.3068 0.380602 20.9134C0.631876 21.52 1.00017 22.0712 1.46447 22.5355C2.40215 23.4732 3.67392 24 5 24H19C19.6566 24 20.3068 23.8707 20.9134 23.6194C21.52 23.3681 22.0712 22.9998 22.5355 22.5355C22.9998 22.0712 23.3681 21.52 23.6194 20.9134C23.8707 20.3068 24 19.6566 24 19V5C24 4.34339 23.8707 3.69321 23.6194 3.08658C23.3681 2.47995 22.9998 1.92876 22.5355 1.46447C22.0712 1.00017 21.52 0.631876 20.9134 0.380602C20.3068 0.129329 19.6566 0 19 0V0ZM22 19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H19C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V19Z"
                />
            </G>
        </Svg>
    )
}

export function TrashIcon(props: SvgProps) {
    return (
        <Svg
            width={props.width ?? "24"} height={props.height ?? "24"}
            viewBox="0 0 28 28"
            fill="none"
        >
            <G clip-path="url(#clip0_486_33976)">
                <Path
                    fill={props.color ?? "#374957"}
                    d="M20.9999 4H17.8999C17.6678 2.87141 17.0538 1.85735 16.1612 1.12872C15.2686 0.40009 14.1521 0.00145452 12.9999 0L10.9999 0C9.84773 0.00145452 8.73126 0.40009 7.83869 1.12872C6.94612 1.85735 6.33204 2.87141 6.09994 4H2.99994C2.73472 4 2.48037 4.10536 2.29283 4.29289C2.1053 4.48043 1.99994 4.73478 1.99994 5C1.99994 5.26522 2.1053 5.51957 2.29283 5.70711C2.48037 5.89464 2.73472 6 2.99994 6H3.99994V19C4.00153 20.3256 4.52882 21.5964 5.46616 22.5338C6.4035 23.4711 7.67434 23.9984 8.99994 24H14.9999C16.3255 23.9984 17.5964 23.4711 18.5337 22.5338C19.4711 21.5964 19.9984 20.3256 19.9999 19V6H20.9999C21.2652 6 21.5195 5.89464 21.707 5.70711C21.8946 5.51957 21.9999 5.26522 21.9999 5C21.9999 4.73478 21.8946 4.48043 21.707 4.29289C21.5195 4.10536 21.2652 4 20.9999 4ZM10.9999 2H12.9999C13.6202 2.00076 14.2251 2.19338 14.7316 2.55144C15.238 2.90951 15.6214 3.41549 15.8289 4H8.17094C8.37852 3.41549 8.76184 2.90951 9.26833 2.55144C9.77481 2.19338 10.3797 2.00076 10.9999 2ZM17.9999 19C17.9999 19.7956 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7956 22 14.9999 22H8.99994C8.20429 22 7.44123 21.6839 6.87862 21.1213C6.31601 20.5587 5.99994 19.7956 5.99994 19V6H17.9999V19Z"
                />
                <Path
                    fill={props.color ?? "#374957"}
                    d="M10 17.9994C10.2652 17.9994 10.5196 17.894 10.7071 17.7065C10.8946 17.5189 11 17.2646 11 16.9994V10.9994C11 10.7342 10.8946 10.4798 10.7071 10.2923C10.5196 10.1047 10.2652 9.99939 10 9.99939C9.73478 9.99939 9.48043 10.1047 9.29289 10.2923C9.10536 10.4798 9 10.7342 9 10.9994V16.9994C9 17.2646 9.10536 17.5189 9.29289 17.7065C9.48043 17.894 9.73478 17.9994 10 17.9994Z"
                />
                <Path
                    fill={props.color ?? "#374957"}
                    d="M13.9999 17.9994C14.2651 17.9994 14.5195 17.894 14.707 17.7065C14.8945 17.5189 14.9999 17.2646 14.9999 16.9994V10.9994C14.9999 10.7342 14.8945 10.4798 14.707 10.2923C14.5195 10.1047 14.2651 9.99939 13.9999 9.99939C13.7347 9.99939 13.4803 10.1047 13.2928 10.2923C13.1052 10.4798 12.9999 10.7342 12.9999 10.9994V16.9994C12.9999 17.2646 13.1052 17.5189 13.2928 17.7065C13.4803 17.894 13.7347 17.9994 13.9999 17.9994Z"
                />
            </G>
        </Svg>
    )
}

export function SearchIcon(props: SvgProps) {
    return (
        <Svg
            width={props.width ?? "24"} height={props.height ?? "24"}
            viewBox="0 0 28 28"
            fill="none"
        >
            <G clipPath="url(#clip0_486_33890)">
                <Path
                    fill={props.color ?? "#374957"}
                    d="M23.7068 22.2937L17.7378 16.3247C19.3644 14.3353 20.1642 11.7968 19.9716 9.23426C19.7791 6.67173 18.609 4.28123 16.7034 2.55722C14.7977 0.833208 12.3024 -0.0924103 9.73342 -0.0281784C7.16447 0.0360534 4.71848 1.08522 2.90139 2.90231C1.0843 4.7194 0.035134 7.16539 -0.0290978 9.73434C-0.0933296 12.3033 0.832289 14.7987 2.5563 16.7043C4.28031 18.6099 6.67081 19.78 9.23334 19.9725C11.7959 20.1651 14.3344 19.3653 16.3238 17.7387L22.2928 23.7077C22.4814 23.8899 22.734 23.9907 22.9962 23.9884C23.2584 23.9861 23.5092 23.8809 23.6946 23.6955C23.88 23.5101 23.9852 23.2593 23.9875 22.9971C23.9897 22.7349 23.8889 22.4823 23.7068 22.2937ZM9.99978 18.0007C8.41753 18.0007 6.87081 17.5315 5.55522 16.6525C4.23962 15.7734 3.21424 14.524 2.60874 13.0622C2.00324 11.6004 1.84481 9.99182 2.1535 8.43998C2.46218 6.88813 3.2241 5.46266 4.34292 4.34384C5.46174 3.22502 6.88721 2.4631 8.43906 2.15442C9.9909 1.84573 11.5994 2.00416 13.0612 2.60966C14.5231 3.21516 15.7725 4.24054 16.6515 5.55614C17.5306 6.87173 17.9998 8.41845 17.9998 10.0007C17.9974 12.1217 17.1538 14.1551 15.654 15.6549C14.1542 17.1547 12.1208 17.9983 9.99978 18.0007Z"
                />
            </G>
        </Svg>
    )
}

export function MessageIcon(props: SvgProps) {
    return (
        <Svg
            width={props.width ?? "24"} height={props.height ?? "24"}
            viewBox="0 0 28 28"
            fill="none"
        >
            <G clip-path="url(#clip0_486_33627)">
                <Path
                    fill={props.color ?? "#374957"}
                    d="M20 0H4C2.93913 0 1.92172 0.421427 1.17157 1.17157C0.421427 1.92172 0 2.93913 0 4L0 16C0 17.0609 0.421427 18.0783 1.17157 18.8284C1.92172 19.5786 2.93913 20 4 20H6.9L11.351 23.763C11.5316 23.9158 11.7605 23.9997 11.997 23.9997C12.2335 23.9997 12.4624 23.9158 12.643 23.763L17.1 20H20C21.0609 20 22.0783 19.5786 22.8284 18.8284C23.5786 18.0783 24 17.0609 24 16V4C24 2.93913 23.5786 1.92172 22.8284 1.17157C22.0783 0.421427 21.0609 0 20 0V0ZM22 16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H17.1C16.6273 18.0001 16.1699 18.1677 15.809 18.473L12 21.69L8.193 18.473C7.83156 18.1673 7.3734 17.9997 6.9 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V16Z"
                />
                <Path
                    fill={props.color ?? "#374957"}
                    d="M7 7.00012H12C12.2652 7.00012 12.5196 6.89476 12.7071 6.70723C12.8946 6.51969 13 6.26534 13 6.00012C13 5.7349 12.8946 5.48055 12.7071 5.29301C12.5196 5.10548 12.2652 5.00012 12 5.00012H7C6.73478 5.00012 6.48043 5.10548 6.29289 5.29301C6.10536 5.48055 6 5.7349 6 6.00012C6 6.26534 6.10536 6.51969 6.29289 6.70723C6.48043 6.89476 6.73478 7.00012 7 7.00012Z"
                />
                <Path
                    fill={props.color ?? "#374957"}
                    d="M17 9H7C6.73478 9 6.48043 9.10536 6.29289 9.29289C6.10536 9.48043 6 9.73478 6 10C6 10.2652 6.10536 10.5196 6.29289 10.7071C6.48043 10.8946 6.73478 11 7 11H17C17.2652 11 17.5196 10.8946 17.7071 10.7071C17.8946 10.5196 18 10.2652 18 10C18 9.73478 17.8946 9.48043 17.7071 9.29289C17.5196 9.10536 17.2652 9 17 9Z"
                />
                <Path
                    fill={props.color ?? "#374957"}
                    d="M17 12.9999H7C6.73478 12.9999 6.48043 13.1052 6.29289 13.2928C6.10536 13.4803 6 13.7347 6 13.9999C6 14.2651 6.10536 14.5195 6.29289 14.707C6.48043 14.8945 6.73478 14.9999 7 14.9999H17C17.2652 14.9999 17.5196 14.8945 17.7071 14.707C17.8946 14.5195 18 14.2651 18 13.9999C18 13.7347 17.8946 13.4803 17.7071 13.2928C17.5196 13.1052 17.2652 12.9999 17 12.9999Z"
                />
            </G>
        </Svg>
    )
}