// 사이드 메뉴바 - 다현

"use client";

import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { ColorOrange } from "../../../../styles/commons/commonsCSS";
import { AdminName, AdminNameContainer, Logo, Menus, SideNavContainer } from "../../../../styles/sideNavCSS";
import { LoginContext } from "../../../../stores/StoreContext";

const SideNav = observer(() => {
    const loginStore = useContext(LoginContext)
    const router = useRouter();

    // 현재 경로 가져오기
    const currentPath = usePathname();

    return (
        <SideNavContainer>
            <AdminNameContainer>
                <AdminName><ColorOrange>{loginStore.admin_id}</ColorOrange>님</AdminName>
            </AdminNameContainer>
            <Menus onClick={() => router.push('/main')} active={currentPath === '/main'}>대시보드</Menus>
            <Menus onClick={() => router.push('/main/userManage/userManagePage')} active={currentPath.startsWith('/main/userManage')}>회원 관리</Menus>
            <Menus onClick={() => router.push('/main/movieManage/movieManagePage')} active={currentPath.startsWith('/main/movieManage')}>콘텐츠 관리</Menus>
            <Menus onClick={() => router.push('/main/QnAManage/QnAManagePage')} active={currentPath.startsWith('/main/QnAManage')}>1:1 문의</Menus>
            <Menus onClick={() => router.push('/main/reportManage/reportManagePage')} active={currentPath.startsWith('/main/reportManage')}>신고 관리</Menus>
            <Menus onClick={() => router.push('/main/adminManage/adminManagePage')} active={currentPath.startsWith('/main/adminManage')}>관리자 관리</Menus>
            <Logo>pretzel</Logo>
        </SideNavContainer>
    )
})

export default SideNav;