import React from 'react';

import Loadable from 'react-loadable';
import Spin from 'antd/lib/spin';

const SpinComponent = () => {
  return (
    <div className="d-flex justify-content-center w-100" style={{ marginTop: 60 }}>
      <Spin />
    </div>
  )
}

export const MYFamily = Loadable({
  loader: () => import("../views/MYFamily"),
  loading: SpinComponent,
  render(loaded, props) {
    let Component = loaded.default;
    return (
      <div className="content-part-component">
        <div className="content-component-inner">
          <Component {...props} />
        </div>
      </div>
    );
  }
});

export const CalendarPage = Loadable({
  loader: () => import('../views/CalendarPage'),
  loading: SpinComponent,
  render(loaded, props) {
    let Component = loaded.default;
    return (
      <div className="content-part-component">
        <div className="content-component-inner">
          <Component {...props} />
        </div>
      </div>
    );
  }
});

export const FeedbackPage = Loadable({
  loader: () => import('../views/FeedbackPage'),
  loading: SpinComponent,
  render(loaded, props) {
    let Component = loaded.default;
    return (
      <div className="content-part-component">
        <div className="content-component-inner">
          <Component {...props} />
        </div>
      </div>
    );
  }
});

export const MandirPage = Loadable({
  loader: () => import('../views/MandirPage'),
  loading: SpinComponent,
  render(loaded, props) {
    let Component = loaded.default;
    return (
      <div className="content-part-component">
        <div className="content-component-inner">
          <Component {...props} />
        </div>
      </div>
    );
  }
});

export const UserProfilePage = Loadable({
  loader: () => import('../views/UserProfilePage'),
  loading: SpinComponent,
  render(loaded, props) {
    let Component = loaded.default;
    return (
      <div className="content-part-component">
        <div className="content-component-inner">
          <Component {...props} />
        </div>
      </div>
    );
  }
});





export const Users = Loadable({
  loader: () => import("../views/TeamPage"),
  loading: SpinComponent,
  render(loaded, props) {
    let Component = loaded.default;
    return (
      <div className="content-part-component">
        <div className="content-component-inner">
          <Component {...props} />
        </div>
      </div>
    );
  }
});

export const TeacherPage = Loadable({
  loader: () => import("../views/TeacherPage"),
  loading: SpinComponent,
  render(loaded, props) {
    let Component = loaded.default;
    return (
      <div className="content-part-component">
        <div className="content-component-inner">
          <Component {...props} />
        </div>
      </div>
    );
  }
});

export const StudentPage = Loadable({
  loader: () => import("../views/StudentPage"),
  loading: SpinComponent,
  render(loaded, props) {
    let Component = loaded.default;
    return (
      <div className="content-part-component">
        <div className="content-component-inner">
          <Component {...props} />
        </div>
      </div>
    );
  }
});

export const NoticeBoard = Loadable({
  loader: () => import("../views/NoticeboardPage"),
  loading: SpinComponent,
  render(loaded, props) {
    let Component = loaded.default;
    return (
      <div className="content-part-component">
        <div className="content-component-inner">
          <Component {...props} />
        </div>
      </div>
    );
  }
});


export const ForgotPassword = Loadable({
  loader: () => import("../auth/ForgotPassword"),
  loading: SpinComponent,
  render(loaded, props) {
    let Component = loaded.default;
    return <Component {...props} />;
  }
});

export const routes = [
  {
    path: "/mandir",
    component: MandirPage,
    exact: true,
  },
  {
    path: '/manage-family',
    component: MYFamily,
    exact: true,
  },
  {
    path: "/manage-users",
    component: Users,
    exact: true,
  },
  {
    path: "/teacher",
    component: TeacherPage,
    exact: true,
  },
  
  {
    path: "/student",
    component: StudentPage,
    exact: true,
  },
  

  {
    path: "/notice-board",
    component: NoticeBoard,
    exact: true,
  },
  {
    path: "/calendar",
    component: CalendarPage,
    exact: true,
  },
  {
    path: "/feedback",
    component: FeedbackPage,
    exact: true,
  },
  {
    path: "/profile",
    component: UserProfilePage,
    exact: true,
  },
]