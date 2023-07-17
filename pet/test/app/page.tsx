import Image from "next/image";

import React from "react";
import { AvatarMedium } from "./AvatarMedium";
import { ButtonPrimary } from "./ButtonPrimary";
import { ButtonSecondary } from "./ButtonSecondary";
import { ChatAdd } from "./ChatAdd";
import { SearchBar } from "./SearchBar";
import { Selected } from "./Selected";
import "./globals.css";

export const Home = (): JSX.Element => {
  return (
    <div className="div-wrapper">
      <div className="group">
        <div className="overlap">
          <div className="body">
            <div className="follow">
              <div className="header">
                <div className="div">팔로우 추천</div>
                <div className="divider" />
              </div>
              <div className="profile">
                <div className="frame">
                  <div className="group-2">
                    <AvatarMedium
                      className="avatar-medium-instance"
                      profilePicture="profile-picture-3.png"
                    />
                    <div className="frame-2">
                      <div className="text-wrapper-2">Bessie Cooper</div>
                      <p className="text-wrapper-3">
                        # 보고 팔로우 혹 할만한 정보
                      </p>
                    </div>
                  </div>
                  <ButtonSecondary
                    className="button-secondary-small"
                    text="팔로우"
                    tweetClassName="button-secondary-instance"
                  />
                </div>
                <div className="divider-2" />
              </div>
              <div className="profile">
                <div className="frame">
                  <div className="frame-3">
                    <AvatarMedium
                      className="design-component-instance-node"
                      profilePicture="profile-picture-4.png"
                    />
                    <div className="frame-4">
                      <div className="text-wrapper-2">Bessie Cooper</div>
                      <div className="text-wrapper-3">@alessandroveronezi</div>
                    </div>
                  </div>
                  <ButtonSecondary
                    className="button-secondary-small-instance"
                    text="팔로우"
                    tweetClassName="button-secondary-2"
                  />
                </div>
                <div className="divider-2" />
              </div>
              <div className="profile">
                <div className="frame">
                  <div className="frame-3">
                    <AvatarMedium
                      className="design-component-instance-node"
                      profilePicture="profile-picture-5.png"
                    />
                    <div className="frame-4">
                      <div className="text-wrapper-2">Bessie Cooper</div>
                      <div className="text-wrapper-3">@alessandroveronezi</div>
                    </div>
                  </div>
                  <ButtonSecondary
                    className="button-secondary-small-instance"
                    text="팔로우"
                    tweetClassName="button-secondary-2"
                  />
                </div>
                <div className="divider-2" />
              </div>
              <div className="profile">
                <div className="frame">
                  <div className="frame-3">
                    <AvatarMedium
                      className="design-component-instance-node"
                      profilePicture="profile-picture-6.png"
                    />
                    <div className="frame-4">
                      <div className="text-wrapper-2">Bessie Cooper</div>
                      <div className="text-wrapper-3">@alessandroveronezi</div>
                    </div>
                  </div>
                  <ButtonSecondary
                    className="button-secondary-small-instance"
                    text="팔로우"
                    tweetClassName="button-secondary-2"
                  />
                </div>
                <div className="divider-2" />
              </div>
              <div className="profile">
                <div className="frame">
                  <div className="frame-3">
                    <AvatarMedium
                      className="design-component-instance-node"
                      profilePicture="profile-picture-7.png"
                    />
                    <div className="frame-4">
                      <div className="text-wrapper-2">Bessie Cooper</div>
                      <div className="text-wrapper-3">@alessandroveronezi</div>
                    </div>
                  </div>
                  <ButtonSecondary
                    className="button-secondary-small-instance"
                    text="팔로우"
                    tweetClassName="button-secondary-2"
                  />
                </div>
                <div className="divider-2" />
              </div>
              <div className="profile">
                <div className="frame">
                  <div className="frame-3">
                    <AvatarMedium
                      className="design-component-instance-node"
                      profilePicture="profile-picture-8.png"
                    />
                    <div className="frame-4">
                      <div className="text-wrapper-2">Bessie Cooper</div>
                      <div className="text-wrapper-3">@alessandroveronezi</div>
                    </div>
                  </div>
                  <ButtonSecondary
                    className="button-secondary-small-instance"
                    text="팔로우"
                    tweetClassName="button-secondary-2"
                  />
                </div>
                <div className="divider-2" />
              </div>
              <div className="profile">
                <div className="frame">
                  <div className="frame-3">
                    <AvatarMedium
                      className="design-component-instance-node"
                      profilePicture="profile-picture-9.png"
                    />
                    <div className="frame-4">
                      <div className="text-wrapper-2">Bessie Cooper</div>
                      <div className="text-wrapper-3">@alessandroveronezi</div>
                    </div>
                  </div>
                  <ButtonSecondary
                    className="button-secondary-small-instance"
                    text="팔로우"
                    tweetClassName="button-secondary-2"
                  />
                </div>
                <div className="divider-2" />
              </div>
              <div className="profile">
                <div className="frame">
                  <div className="frame-3">
                    <AvatarMedium
                      className="design-component-instance-node"
                      profilePicture="profile-picture-10.png"
                    />
                    <div className="frame-4">
                      <div className="text-wrapper-2">Bessie Cooper</div>
                      <div className="text-wrapper-3">@alessandroveronezi</div>
                    </div>
                  </div>
                  <ButtonSecondary
                    className="button-secondary-small-instance"
                    text="팔로우"
                    tweetClassName="button-secondary-2"
                  />
                </div>
                <div className="divider-2" />
              </div>
            </div>
            <div className="middle">
              <SearchBar
                className="search-bar-instance"
                search="search-2.svg"
              />
              <div className="feed">
                <div className="header-2">
                  <div className="text-wrapper-4">뉴 피드</div>
                  <div className="divider-3">
                    <div className="divider-4" />
                    <div className="frame-5" />
                  </div>
                  <img className="refresh" alt="Refresh" src="refresh.svg" />
                </div>
                <div className="post">
                  <div className="inner">
                    <AvatarMedium
                      className="avatar-medium-3"
                      profilePicture="profile-picture-11.png"
                      profilePictureClassName="avatar-medium-2"
                    />
                    <div className="text-wrapper-5">
                      자유롭게 이야기 해보세요!
                    </div>
                    <ButtonPrimary
                      className="button-primary-medium"
                      text="업로드"
                      tweetClassName="button-primary-instance"
                    />
                    <ButtonPrimary
                      className="button-primary-medium-instance"
                      text="사진 첨부"
                      tweetClassName="button-primary-2"
                    />
                  </div>
                </div>
                <div className="tweet-2">
                  <div className="divider-wrapper">
                    <div className="divider-5" />
                  </div>
                  <div className="container">
                    <div className="side">
                      <AvatarMedium
                        className="avatar-medium-4"
                        profilePicture="profile-picture-12.png"
                        profilePictureClassName="avatar-medium-2"
                      />
                    </div>
                    <div className="main">
                      <div className="user">
                        <div className="text-wrapper-6">Devon Lane</div>
                        <div className="text-wrapper-7">@johndue</div>
                        <div className="text-wrapper-8">·</div>
                        <div className="text-wrapper-7">23s</div>
                      </div>
                      <div className="content">
                        <div className="text-wrapper-9">
                          우리집 강아지 커여웡
                        </div>
                      </div>
                      <img className="media" alt="Media" src="media.png" />
                      <div className="actions">
                        <div className="action-item">
                          <div className="text-wrapper-10">61</div>
                          <img
                            className="chat-lines"
                            alt="Chat lines"
                            src="chat-lines.svg"
                          />
                        </div>
                        <div className="action-item">
                          <Selected className="dark-theme-like" />
                          <div className="text-wrapper-11">6.2K</div>
                        </div>
                      </div>
                      <div className="frame-6">
                        <AvatarMedium
                          className="avatar-medium-5"
                          profilePicture="profile-picture-13.png"
                          profilePictureClassName="avatar-medium-6"
                        />
                        <div className="frame-7">
                          <div className="frame-8">
                            <div className="text-wrapper-12">Devon Lane</div>
                            <div className="frame-9">
                              <div className="div-2">
                                <div className="frame-10">
                                  <div className="text-wrapper-13">
                                    @ 싸이어족
                                  </div>
                                </div>
                                <div className="text-wrapper-14">
                                  우리집 강아지 커여웡
                                </div>
                              </div>
                              <div className="text-wrapper-15">29주</div>
                            </div>
                          </div>
                          <div className="frame-11">
                            <div className="text-wrapper-16">댓글 접기</div>
                            <img
                              className="nav-arrow-down"
                              alt="Nav arrow down"
                              src="nav-arrow-down.svg"
                            />
                          </div>
                          <div className="frame-12">
                            <AvatarMedium
                              className="avatar-medium-7"
                              profilePicture="profile-picture-14.png"
                              profilePictureClassName="avatar-medium-8"
                            />
                            <div className="frame-13">
                              <div className="text-wrapper-12">Devon Lane</div>
                              <div className="frame-wrapper">
                                <div className="frame-9">
                                  <div className="text-wrapper-17">
                                    우리집 강아지 커여웡
                                  </div>
                                  <div className="text-wrapper-15">29주</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="frame-12">
                            <AvatarMedium
                              className="avatar-medium-7"
                              profilePicture="profile-picture-15.png"
                              profilePictureClassName="avatar-medium-8"
                            />
                            <div className="frame-13">
                              <div className="text-wrapper-12">Devon Lane</div>
                              <div className="frame-wrapper">
                                <div className="frame-9">
                                  <div className="text-wrapper-17">
                                    우리집 강아지 커여웡
                                  </div>
                                  <div className="text-wrapper-15">29주</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-12">
                        <AvatarMedium
                          className="avatar-medium-5"
                          profilePicture="profile-picture-16.png"
                          profilePictureClassName="avatar-medium-6"
                        />
                        <div className="frame-14">
                          <div className="text-wrapper-18">
                            댓글을 작성하세요
                          </div>
                          <ChatAdd className="chat-add" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tweet-2">
                  <div className="divider-wrapper">
                    <div className="divider-5" />
                  </div>
                  <div className="container">
                    <div className="side">
                      <AvatarMedium
                        className="avatar-medium-4"
                        profilePicture="profile-picture-17.png"
                        profilePictureClassName="avatar-medium-2"
                      />
                    </div>
                    <div className="main">
                      <div className="user">
                        <div className="text-wrapper-6">Devon Lane</div>
                        <div className="text-wrapper-7">@johndue</div>
                        <div className="text-wrapper-8">·</div>
                        <div className="text-wrapper-7">23s</div>
                      </div>
                      <div className="content">
                        <div className="text-wrapper-9">
                          우리집 강아지 커여웡
                        </div>
                      </div>
                      <img className="media" alt="Media" src="image.png" />
                      <div className="actions">
                        <div className="action-item">
                          <div className="text-wrapper-10">61</div>
                          <img
                            className="chat-lines"
                            alt="Chat lines"
                            src="image.svg"
                          />
                        </div>
                        <div className="action-item">
                          <Selected className="dark-theme-like" />
                          <div className="text-wrapper-11">6.2K</div>
                        </div>
                      </div>
                      <div className="frame-6">
                        <AvatarMedium
                          className="avatar-medium-5"
                          profilePicture="profile-picture-18.png"
                          profilePictureClassName="avatar-medium-6"
                        />
                        <div className="frame-7">
                          <div className="frame-8">
                            <div className="text-wrapper-12">Devon Lane</div>
                            <div className="frame-9">
                              <div className="div-2">
                                <div className="frame-10">
                                  <div className="text-wrapper-13">
                                    @ 싸이어족
                                  </div>
                                </div>
                                <div className="text-wrapper-14">
                                  우리집 강아지 커여웡
                                </div>
                              </div>
                              <div className="text-wrapper-15">29주</div>
                            </div>
                          </div>
                          <div className="frame-11">
                            <div className="text-wrapper-16">댓글 접기</div>
                            <img
                              className="nav-arrow-down"
                              alt="Nav arrow down"
                              src="nav-arrow-down-2.svg"
                            />
                          </div>
                          <div className="frame-12">
                            <AvatarMedium
                              className="avatar-medium-7"
                              profilePicture="profile-picture-19.png"
                              profilePictureClassName="avatar-medium-8"
                            />
                            <div className="frame-13">
                              <div className="text-wrapper-12">Devon Lane</div>
                              <div className="frame-wrapper">
                                <div className="frame-9">
                                  <div className="text-wrapper-17">
                                    우리집 강아지 커여웡
                                  </div>
                                  <div className="text-wrapper-15">29주</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="frame-12">
                            <AvatarMedium
                              className="avatar-medium-7"
                              profilePicture="profile-picture-20.png"
                              profilePictureClassName="avatar-medium-8"
                            />
                            <div className="frame-13">
                              <div className="text-wrapper-12">Devon Lane</div>
                              <div className="frame-wrapper">
                                <div className="frame-9">
                                  <div className="text-wrapper-17">
                                    우리집 강아지 커여웡
                                  </div>
                                  <div className="text-wrapper-15">29주</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-12">
                        <AvatarMedium
                          className="avatar-medium-5"
                          profilePicture="profile-picture-21.png"
                          profilePictureClassName="avatar-medium-6"
                        />
                        <div className="frame-14">
                          <div className="text-wrapper-18">
                            댓글을 작성하세요
                          </div>
                          <ChatAdd className="chat-add" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="message">
              <div className="header-3">
                <div className="div">메세지 목록</div>
                <div className="divider" />
              </div>
              <div className="profile">
                <div className="frame">
                  <div className="group-3">
                    <AvatarMedium
                      className="avatar-medium-instance"
                      profilePicture="profile-picture-22.png"
                    />
                    <div className="frame-2">
                      <div className="text-wrapper-2">Bessie Cooper</div>
                      <div className="text-wrapper-3">@alessandroveronezi</div>
                    </div>
                  </div>
                  <ButtonSecondary
                    className="button-secondary-small"
                    text="2"
                    tweetClassName="button-secondary-instance"
                  />
                </div>
                <div className="divider-2" />
              </div>
              <div className="profile">
                <div className="frame">
                  <div className="frame-3">
                    <AvatarMedium
                      className="design-component-instance-node"
                      profilePicture="profile-picture-23.png"
                    />
                    <div className="frame-4">
                      <div className="text-wrapper-2">Bessie Cooper</div>
                      <div className="text-wrapper-3">@alessandroveronezi</div>
                    </div>
                  </div>
                  <ButtonSecondary
                    className="button-secondary-small"
                    text="999+"
                    tweetClassName="button-secondary-instance"
                  />
                </div>
                <div className="divider-2" />
              </div>
              <div className="profile">
                <div className="frame">
                  <div className="frame-3">
                    <AvatarMedium
                      className="design-component-instance-node"
                      profilePicture="profile-picture-24.png"
                    />
                    <div className="frame-4">
                      <div className="text-wrapper-2">Bessie Cooper</div>
                      <div className="text-wrapper-3">@alessandroveronezi</div>
                    </div>
                  </div>
                  <ButtonSecondary
                    className="button-secondary-3"
                    text="999+"
                    tweetClassName="button-secondary-instance"
                  />
                </div>
                <div className="divider-2" />
              </div>
              <div className="profile">
                <div className="frame">
                  <div className="frame-3">
                    <AvatarMedium
                      className="design-component-instance-node"
                      profilePicture="profile-picture-25.png"
                    />
                    <div className="frame-4">
                      <div className="text-wrapper-2">Bessie Cooper</div>
                      <div className="text-wrapper-3">@alessandroveronezi</div>
                    </div>
                  </div>
                  <ButtonSecondary
                    className="button-secondary-3"
                    text="999+"
                    tweetClassName="button-secondary-instance"
                  />
                </div>
                <div className="divider-2" />
              </div>
              <div className="profile">
                <div className="frame">
                  <div className="frame-3">
                    <AvatarMedium
                      className="design-component-instance-node"
                      profilePicture="profile-picture-26.png"
                    />
                    <div className="frame-4">
                      <div className="text-wrapper-2">Bessie Cooper</div>
                      <div className="text-wrapper-3">@alessandroveronezi</div>
                    </div>
                  </div>
                  <ButtonSecondary
                    className="button-secondary-3"
                    text="999+"
                    tweetClassName="button-secondary-instance"
                  />
                </div>
                <div className="divider-2" />
              </div>
            </div>
          </div>
          <div className="gnb">
            <div className="logo">
              <img className="logo-icon" alt="Logo icon" src="logo-icon.png" />
              <h1 className="logo-text">펫밀리</h1>
            </div>
            <div className="menu">
              <div className="menu-curatioin-text">큐레이션</div>
              <div className="menu-community-text">소통하기</div>
              <div className="menu-cheapprice-text">인기용품 최저가</div>
            </div>
            <div className="div-2">
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <div className="ellipse" />
                </div>
              </div>
              <div className="myprofile-btn">
                <div className="myname-text">싸이어족</div>
                <img
                  className="dropdown-icon"
                  alt="Dropdown icon"
                  src="dropdown-icon.png"
                />
              </div>
            </div>
          </div>
          <div className="view">
            <div className="overlap-2">
              <img className="image" alt="Image" src="image-2.svg" />
              <div className="view-2">
                <div className="header">
                  <div className="text-wrapper-19">알림</div>
                </div>
                <div className="profile-2">
                  <div className="frame-15">
                    <AvatarMedium
                      className="design-component-instance-node"
                      profilePicture="profile-picture-2.png"
                    />
                    <div className="frame-16">
                      <div className="frame-17">
                        <div className="frame-18">
                          <div className="text-wrapper-6">Bessie Cooper</div>
                          <div className="text-wrapper-20">가 보낸 알림</div>
                        </div>
                      </div>
                      <div className="frame-19">
                        <div className="text-wrapper-21">우리집 강아지...</div>
                        <div className="text-wrapper-22">
                          글에 새로운 댓글이 있습니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-3">
                  <div className="frame-15">
                    <AvatarMedium
                      className="design-component-instance-node"
                      profilePicture="profile-picture-27.png"
                    />
                    <div className="frame-16">
                      <div className="frame-17">
                        <div className="frame-18">
                          <div className="text-wrapper-6">Bessie Cooper</div>
                          <div className="text-wrapper-20">가 보낸 알림</div>
                        </div>
                      </div>
                      <div className="frame-19">
                        <div className="text-wrapper-21">우리집 강아지...</div>
                        <div className="text-wrapper-23">
                          글에 새로운 좋아요가 있습니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-2">
                  <div className="frame-15">
                    <AvatarMedium
                      className="design-component-instance-node"
                      profilePicture="profile-picture-29.png"
                    />
                    <div className="frame-16">
                      <div className="frame-17">
                        <div className="frame-18">
                          <div className="text-wrapper-6">Bessie Cooper</div>
                          <div className="text-wrapper-20">가 보낸 알림</div>
                        </div>
                      </div>
                      <div className="frame-19">
                        <div className="text-wrapper-21">우리집 강아지...</div>
                        <div className="text-wrapper-23">
                          글에 새로운 좋아요가 있습니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-2">
                  <div className="frame-15">
                    <AvatarMedium
                      className="design-component-instance-node"
                      profilePicture="profile-picture-30.png"
                    />
                    <div className="frame-16">
                      <div className="frame-17">
                        <div className="frame-18">
                          <div className="text-wrapper-6">Bessie Cooper</div>
                          <div className="text-wrapper-20">가 보낸 알림</div>
                        </div>
                      </div>
                      <div className="frame-19">
                        <div className="text-wrapper-21">우리집 강아지...</div>
                        <div className="text-wrapper-23">
                          글에 새로운 좋아요가 있습니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="profile-2">
                  <div className="frame-15">
                    <AvatarMedium
                      className="design-component-instance-node"
                      profilePicture="profile-picture-28.png"
                    />
                    <div className="frame-16">
                      <div className="frame-17">
                        <div className="frame-18">
                          <div className="text-wrapper-6">Bessie Cooper</div>
                          <div className="text-wrapper-20">가 보낸 알림</div>
                        </div>
                      </div>
                      <div className="frame-19">
                        <div className="text-wrapper-21">우리집 강아지...</div>
                        <div className="text-wrapper-22">
                          글에 님을 태그했습니다.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
