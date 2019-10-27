import React from 'react';
import { useHistory } from 'react-router-dom';

const Profile = props => {
  let history = useHistory();
  const { user, errorProfile, handleChangeNotifyError } = props;

  //Kiểm Tra Login chưa
  if (JSON.parse(localStorage.getItem('token')) === null) {
    history.push('/login');
    return <></>;
  } else {
    if (user === null) {
      return <></>;
    }
  }

  const handleSubmit = async event => {
    event.preventDefault();
    const {
      email,
      fullname,
      newPassword,
      oldPassword,
      files
    } = event.target.elements;

    const data = new FormData();
    if (files.files[0] !== undefined) {
      data.append('file', files.files[0]);
    }
    const temp = JSON.stringify({
      email: email.value,
      fullname: fullname.value,
      newPassword: newPassword.value,
      oldPassword: oldPassword.value
    });
    data.append('user', temp);
    var request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3001/user/edit');
    request.send(data);
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const res = JSON.parse(this.responseText);
        handleChangeNotifyError(res.msg);
        newPassword.value = '';
        oldPassword.value = '';
      }
    };
  };

  const handleChangeImage = async event => {
    const tagAvatar = document.getElementById('tagAvatar');
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      tagAvatar.attributes[1].value = reader.result;
    };
  };

  const handleBack = () => {
    history.push('/');
  };

  const renderNotify = msg => {
    if (msg !== '') {
      return (
        <div className="alert alert-danger" role="alert">
          {msg}
        </div>
      );
    }
  };

  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-header font-weight-bold">Thông tin chi tiết</div>
        <div className="card-body">
          {renderNotify(errorProfile)}
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="media">
              <div>
                <div>
                  <img
                    id="tagAvatar"
                    src={
                      user.avatarURL === ''
                        ? 'images/avatar.jpg'
                        : user.avatarURL
                    }
                    className="align-self-start mr-3"
                    style={{ maxWidth: '7rem' }}
                    alt="Avatar"
                  />
                </div>
                <div className="d-flex justify-content-center mr-3 mt-1">
                  <div className="btn btn-primary p-0">
                    <label
                      htmlFor="files"
                      className="m-0 p-2"
                      style={{ display: 'block' }}
                    >
                      ✐
                    </label>
                  </div>
                </div>
              </div>
              <div className="media-body">
                <div className="form-group row">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      readOnly
                      className="form-control-plaintext"
                      defaultValue={user.email}
                      name="email"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-2 col-form-label"
                  >
                    Họ tên
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="fullname"
                      className="form-control"
                      defaultValue={user.fullname}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-2 col-form-label"
                  >
                    Mật khẩu mới
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      name="newPassword"
                    />
                  </div>
                </div>
              </div>
            </div>
            <input
              id="files"
              name="files"
              style={{ visibility: 'hidden' }}
              type="file"
              onChange={handleChangeImage}
            />
            <div className="d-flex justify-content-center">
              <div className="font-weight-bold">Mật khẩu</div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="oldPassword"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div style={{ maxWidth: '25rem' }}>
                <button
                  type="submit"
                  style={{ width: '7rem' }}
                  className="btn btn-danger"
                >
                  Thay đổi
                </button>
                <span> </span>
                <button
                  type="button"
                  style={{ width: '7rem' }}
                  className="btn btn-secondary"
                  onClick={handleBack}
                >
                  Hủy
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
