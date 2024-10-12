<template>
  <DeshboardLayout>
    <div class="page-container">
      <div class="main-content">
        <div class="section-gap">
          <div class="container-fluid">
            <div class="desktop-screen-show">
              <div class="">
                <section class="video-des bg-img">
                  <div class="">
                    <div class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="deslidt">
                          <ul>
                            <li>
                              <div class="serials">
                                <div
                                  class="col-sm-6 col-xs-12 left-con"
                                  v-animate
                                  data-animation="fadeInUp animated"
                                  data-wow-duration="1.0s"
                                >
                                  <div class="box-con">
                                    <div class="dbox">
                                      <div class="dleft">
                                        <div class="imgs">
                                          <i class="fa fa-download"></i>
                                        </div>
                                      </div>
                                      <div class="dright">
                                        <div class="content">
                                          <h3>$ {{ sumtrx('deposit','success') }}</h3>
                                          <p>total deposit</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="col-sm-6 col-xs-12 right-con"
                                  data-wow-duration="1.3s"
                                  v-animate
                                  data-animation="fadeInUp animated"
                                >
                                  <div class="box-con">
                                    <div class="dbox">
                                      <div class="dleft">
                                        <div class="content">
                                          <h3>$ {{ sumtrx('withdraw','success') }}</h3>
                                          <p>Total Withdraw</p>
                                        </div>
                                      </div>
                                      <div class="dright">
                                        <div class="imgs">
                                          <i class="fa fa-bank"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="serials">
                                <div
                                  class="col-sm-6 col-xs-12 left-con"
                                  v-animate
                                  data-animation="fadeInUp animated"
                                  data-wow-duration="1.0s"
                                >
                                  <div class="box-con">
                                    <div class="dbox">
                                      <div class="dleft">
                                        <div class="imgs">
                                          <i class="fa fa-arrow-down"></i>
                                        </div>
                                      </div>
                                      <div class="dright">
                                        <div class="content">
                                          <h3>$ {{ sumtrx('deposit','pending') }}</h3>
                                          <p>pending deposit</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="col-sm-6 col-xs-12 right-con"
                                  data-wow-duration="1.3s"
                                  v-animate
                                  data-animation="fadeInUp animated"
                                >
                                  <div class="box-con">
                                    <div class="dbox">
                                      <div class="dleft">
                                        <div class="content">
                                          <h3>${{ sumtrx('withdraw','pending') }}</h3>
                                          <p>Pending Withdraw</p>
                                        </div>
                                      </div>
                                      <div class="dright">
                                        <div class="imgs">
                                          <i class="fa fa-id-card"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="serials">
                                <div
                                  class="col-sm-6 col-xs-12 left-con"
                                  v-animate
                                  data-animation="fadeInUp animated"
                                  data-wow-duration="1.6s"
                                >
                                  <div class="box-con">
                                    <div class="dbox">
                                      <div class="dleft">
                                        <div class="imgs">
                                          <i class="fa fa-area-chart"></i>
                                        </div>
                                      </div>
                                      <div class="dright">
                                        <div class="content">
                                          <h3>{{ this.transaction.length }}</h3>
                                          <p>Total Transaction</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  class="col-sm-6 col-xs-12 right-con"
                                  data-wow-duration="2s"
                                  v-animate
                                  data-animation="fadeInRight animated"
                                >
                                  <div class="box-con">
                                    <div class="dbox">
                                      <div class="dleft">
                                        <div class="content">
                                          <h3>$ {{ sumtrx('withdraw','rejected') }}</h3>
                                          <p>Rejected Withdraw</p>
                                        </div>
                                      </div>
                                      <div class="dright">
                                        <div class="imgs">
                                          <i class="fa fa-trash"></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div class="desktop-screen-show">
              <div class="row">
                <div class="col-xl-12">
                  <div class="site-card">
                    <div class="site-card-header">
                      <h3 class="title">Recent Transaction</h3>
                    </div>
                    <div class="site-card-body">
                      <div class="site-table">
                        <div class="table-responsive">
                          <table class="table table-hover">
                            <thead>
                              <tr>
                                <th>Description</th>
                                <th>Transactions ID</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Wallet</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(
                                  transactionItem, index
                                ) in displayedItems"
                                :key="index"
                              >
                                <td>
                                  <div class="table-description">
                                    <div class="icon">
                                      <i
                                        class="fa fa-arrow-down"
                                        v-if="
                                          transactionItem.type === 'deposit'
                                        "
                                      ></i>
                                      <i class="fa fa-arrow-up" v-else></i>
                                    </div>
                                    <div class="description">
                                      <strong>{{
                                        transactionItem.method
                                      }}</strong>
                                      <div class="date">
                                        {{
                                          transactionItem.created_at.substring(
                                            0,
                                            10
                                          )
                                        }}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <strong>{{ transactionItem.trx }}</strong>
                                </td>
                                <td>
                                  <strong
                                    class="green-color"
                                    v-if="transactionItem.type === 'deposit'"
                                    >+{{ transactionItem.amount }} USD</strong
                                  >
                                  <strong class="red-color" v-else
                                    >-{{ transactionItem.amount }} USD</strong
                                  >
                                </td>
                                <td>
                                  <div
                                    class="site-badge"
                                    :class="{
                                      warnning:
                                        transactionItem.status === 'pending',
                                      failed:
                                        transactionItem.status === 'rejected',
                                      success:
                                        transactionItem.status === 'success',
                                    }"
                                  >
                                    {{ transactionItem.status }}
                                  </div>
                                </td>
                                <td>
                                  <strong
                                    v-if="transactionItem.address === 'Live'"
                                    >Profit</strong
                                  >
                                  <strong v-else> Main </strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mobile-screen-show">
              <div class="row">
                <div class="col-12">
                  <div
                    class="user-ranking-mobile"
                    v-animate
                    data-animation="fadeInRight animated"
                    data-wow-duration="1.0s"
                  >
                    <div class="icon">
                      <img
                        v-if="authUser.profile"
                        :src="authUser.profile"
                        alt=""
                      />
                      <img
                        v-else
                        src="https://ensurepms.com/assets/global/materials/user.png"
                        alt=""
                      />
                    </div>
                    <div class="name">
                      <h4>Hi, {{ authUser.name }}</h4>
                      <p>
                        Email - <span>{{ authUser.email }}</span>
                      </p>
                    </div>
                    <div class="rank-badge">
                      <img
                        src="https://ensurepms.com/assets/global/images/PZwfiFCPi9nH2kbYGdWo.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div
                    class="user-wallets-mobile"
                    v-animate
                    data-animation="fadeInLeft animated"
                    data-wow-duration="1.0s"
                  >
                    <img
                      src="https://ensurepms.com/assets/frontend/materials/wallet-shadow.png"
                      alt=""
                      class="wallet-shadow"
                    />
                    <div class="head">All Wallets in USD</div>
                    <div class="one">
                      <div class="balance">
                        <span class="symbol">$</span
                        ><span class="after-dot"
                          >{{ authUser.main_balance }}
                        </span>
                      </div>
                      <div class="wallet">Main Wallet</div>
                    </div>

                    <div class="one p-wal">
                      <div class="balance">
                        <span class="symbol">$</span>
                        {{ authUser.live_balance }}
                      </div>
                      <div class="wallet">Profit Wallet</div>
                    </div>
                    <div class="info">
                      <i icon-name="info"></i>Total balance : $
                      {{
                        Number(authUser.main_balance) +
                        Number(authUser.live_balance)
                      }}
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <div class="mob-shortcut-btn">
                    <router-link
                      to="/deposit"
                      v-animate
                      data-animation="bounceInDown animated"
                      data-wow-duration="1.0s"
                      ><i class="fa fa-arrow-down"></i> Deposit</router-link
                    >
                    <router-link
                      to="/transaction"
                      v-animate
                      data-animation="bounceInDown animated"
                      data-wow-duration="1.5s"
                      ><i class="fa fa-shopping-bag"></i> All Log</router-link
                    >
                    <router-link
                      to="/withdraw"
                      v-animate
                      data-animation="bounceInDown animated"
                      data-wow-duration="2s"
                      ><i class="fa fa-arrow-up"></i> Withdraw</router-link
                    >
                  </div>
                </div>

                <div class="col-12">
                  <!-- all navigation -->
                  <div class="all-feature-mobile mb-3 mobile-screen-show">
                    <div class="title">All Navigations</div>
                    <div class="contents row">
                      <div
                        class="col-lg-4 col-md-4 col-sm-4 col-xs-4"
                        v-animate
                        data-animation="bounceInUp animated"
                        data-wow-duration="1.0s"
                      >
                        <div class="single">
                          <router-link to="/account">
                            <div class="icon">
                              <img
                                src="https://ensurepms.com/assets/frontend/materials/schema.png"
                                alt=""
                              />
                            </div>
                            <div class="name">profile</div>
                          </router-link>
                        </div>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-4 col-xs-4"
                        v-animate
                        data-animation="bounceInUp animated"
                        data-wow-duration="1.3s"
                      >
                        <div class="single">
                          <router-link to="/withdraw/log">
                            <div class="icon">
                              <img
                                src="https://ensurepms.com/assets/frontend/materials/withdraw-log.png"
                                alt=""
                              />
                            </div>
                            <div class="name">Withdraw Log</div>
                          </router-link>
                        </div>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-4 col-xs-4"
                        v-animate
                        data-animation="bounceInUp animated"
                        data-wow-duration="1.6s"
                      >
                        <div class="single">
                          <router-link to="/transaction">
                            <div class="icon">
                              <img
                                src="https://ensurepms.com/assets/frontend/materials/transactions.png"
                                alt=""
                              />
                            </div>
                            <div class="name">Transactions</div>
                          </router-link>
                        </div>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-4 col-xs-4"
                        v-animate
                        data-animation="bounceInUp animated"
                        data-wow-duration="1.9s"
                      >
                        <div class="single">
                          <router-link to="/deposit">
                            <div class="icon">
                              <img
                                src="https://ensurepms.com/assets/frontend/materials/deposit.png"
                                alt=""
                              />
                            </div>
                            <div class="name">Deposit</div>
                          </router-link>
                        </div>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-4 col-xs-4"
                        v-animate
                        data-animation="bounceInUp animated"
                        data-wow-duration="2.2s"
                      >
                        <div class="single">
                          <router-link to="/deposit/log">
                            <div class="icon">
                              <img
                                src="https://ensurepms.com/assets/frontend/materials/deposit-log.png"
                                alt=""
                              />
                            </div>
                            <div class="name">Deposit Log</div>
                          </router-link>
                        </div>
                      </div>
                      <div
                        class="col-lg-4 col-md-4 col-sm-4 col-xs-4"
                        v-animate
                        data-animation="bounceInUp animated"
                        data-wow-duration="2.5s"
                      >
                        <div class="single">
                          <router-link to="/kyc">
                            <div class="icon">
                              <img
                                src="https://ensurepms.com/assets/frontend/materials/wallet-exchange.png"
                                alt=""
                              />
                            </div>
                            <div class="name">KYC</div>
                          </router-link>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="moretext">
                        <div class="row contents">
                          <div class="col-4">
                            <div class="single">
                              <a href="https://ensurepms.com/user/send-money">
                                <div class="icon">
                                  <img
                                    src="https://ensurepms.com/assets/frontend/materials/transfer.png"
                                    alt=""
                                  />
                                </div>
                                <div class="name">Transfer</div>
                              </a>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="single">
                              <a
                                href="https://ensurepms.com/user/send-money/log"
                              >
                                <div class="icon">
                                  <img
                                    src="https://ensurepms.com/assets/frontend/materials/transfer-log.png"
                                    alt=""
                                  />
                                </div>
                                <div class="name">Transfer Log</div>
                              </a>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="single">
                              <a href="https://ensurepms.com/user/withdraw">
                                <div class="icon">
                                  <img
                                    src="https://ensurepms.com/assets/frontend/materials/withdraw.png"
                                    alt=""
                                  />
                                </div>
                                <div class="name">Withdraw</div>
                              </a>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="single">
                              <a href="https://ensurepms.com/user/withdraw/log">
                                <div class="icon">
                                  <img
                                    src="https://ensurepms.com/assets/frontend/materials/withdraw-log.png"
                                    alt=""
                                  />
                                </div>
                                <div class="name">Withdraw Log</div>
                              </a>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="single">
                              <a
                                href="https://ensurepms.com/user/ranking-badge"
                              >
                                <div class="icon">
                                  <img
                                    src="https://ensurepms.com/assets/frontend/materials/ranking.png"
                                    alt=""
                                  />
                                </div>
                                <div class="name">Ranking Badge</div>
                              </a>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="single">
                              <a href="https://ensurepms.com/user/referral">
                                <div class="icon">
                                  <img
                                    src="https://ensurepms.com/assets/frontend/materials/referral.png"
                                    alt=""
                                  />
                                </div>
                                <div class="name">Referral</div>
                              </a>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="single">
                              <a href="https://ensurepms.com/user/settings">
                                <div class="icon">
                                  <img
                                    src="https://ensurepms.com/assets/frontend/materials/settings.png"
                                    alt=""
                                  />
                                </div>
                                <div class="name">Settings</div>
                              </a>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="single">
                              <a
                                href="https://ensurepms.com/user/support-ticket/index"
                              >
                                <div class="icon">
                                  <img
                                    src="https://ensurepms.com/assets/frontend/materials/support-ticket.png"
                                    alt=""
                                  />
                                </div>
                                <div class="name">Support Ticket</div>
                              </a>
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="single">
                              <a
                                href="https://ensurepms.com/user/notification/all"
                              >
                                <div class="icon">
                                  <img
                                    src="https://ensurepms.com/assets/frontend/materials/profile.png"
                                    alt=""
                                  />
                                </div>
                                <div class="name">Notifications</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div> -->
                  </div>

                  <!-- all Statistic -->
                  <div class="all-feature-mobile mb-3 p-4 mobile-screen-show">
                    <div class="title">All Statistic</div>
                    <div class="row">
                      <div class="col-12">
                        <div class="all-cards-mobile">
                          <div class="contents row">
                            <div
                              class="col-12"
                              v-animate
                              data-animation="fadeInUp animated"
                              data-wow-duration="1s"
                            >
                              <div class="single-card">
                                <div class="icon">
                                  <i class="fa fa-compress"></i>
                                </div>
                                <div class="content">
                                  <div class="amount count">{{ this.transaction.length }}</div>
                                  <div class="name">All Transactions</div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-12"
                              v-animate
                              data-animation="fadeInUp animated"
                              data-wow-duration="1.5s"
                            >
                              <div class="single-card">
                                <div class="icon">
                                  <i class="fa fa-pie-chart"></i>
                                </div>
                                <div class="content">
                                  <div class="amount">
                                    $<span class="count">{{ sumtrx('deposit','success') }}</span>
                                  </div>
                                  <div class="name">Total Deposit</div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-12"
                              v-animate
                              data-animation="fadeInUp animated"
                              data-wow-duration="2s"
                            >
                              <div class="single-card">
                                <div class="icon">
                                  <i class="fa fa-bar-chart"></i>
                                </div>
                                <div class="content">
                                  <div class="amount">
                                    $<span class="count">{{ sumtrx('withdraw','success') }}</span>
                                  </div>
                                  <div class="name">Total Withdraw</div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-12"
                              v-animate
                              data-animation="fadeInUp animated"
                              data-wow-duration="2s"
                            >
                              <div class="single-card">
                                <div class="icon">
                                  <i class="fa fa-arrow-down"></i>
                                </div>
                                <div class="content">
                                  <div class="amount">
                                    $<span class="count">{{ sumtrx('deposit','pending') }}</span>
                                  </div>
                                  <div class="name">Pending Deposit</div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-12"
                              v-animate
                              data-animation="fadeInUp animated"
                              data-wow-duration="2s"
                            >
                              <div class="single-card">
                                <div class="icon">
                                  <i class="fa fa-arrow-circle-up"></i>
                                </div>
                                <div class="content">
                                  <div class="amount">
                                    $<span class="count">{{ sumtrx('withdraw','pending') }}</span>
                                  </div>
                                  <div class="name">Pending Withdraw</div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-12"
                              v-animate
                              data-animation="fadeInUp animated"
                              data-wow-duration="2s"
                            >
                              <div class="single-card">
                                <div class="icon">
                                  <i class="fa fa-window-close"></i>
                                </div>
                                <div class="content">
                                  <div class="amount">
                                    $<span class="count">{{ sumtrx('withdraw','rejected') }}</span>
                                  </div>
                                  <div class="name">Rejected Withdraw</div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="col-12"
                              v-animate
                              data-animation="fadeInUp animated"
                              data-wow-duration="2s"
                            >
                              <div class="single-card">
                                <div class="icon">
                                  <i class="fa fa-trash"></i>
                                </div>
                                <div class="content">
                                  <div class="amount">
                                    $<span class="count">{{ sumtrx('deposit','rejected') }}</span>
                                  </div>
                                  <div class="name">Rejected Deposit</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <!-- <div class="moretext-2">
                              <div class="contents row">
                                <div class="col-12">
                                  <div class="single-card">
                                    <div class="icon">
                                      <i icon-name="credit-card"></i>
                                    </div>
                                    <div class="content">
                                      <div class="amount">
                                        $<span class="count">0</span>
                                      </div>
                                      <div class="name">Total Profit</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="single-card">
                                    <div class="icon">
                                      <i icon-name="log-in"></i>
                                    </div>
                                    <div class="content">
                                      <div class="amount">
                                        $<span class="count">0</span>
                                      </div>
                                      <div class="name">Total Transfer</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="single-card">
                                    <div class="icon">
                                      <i icon-name="send"></i>
                                    </div>
                                    <div class="content">
                                      <div class="amount">
                                        $<span class="count">0</span>
                                      </div>
                                      <div class="name">Total Withdraw</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="single-card">
                                    <div class="icon">
                                      <i icon-name="users-2"></i>
                                    </div>
                                    <div class="content">
                                      <div class="amount">
                                        $<span class="count">0</span>
                                      </div>
                                      <div class="name">Referral Bonus</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="single-card">
                                    <div class="icon">
                                      <i icon-name="anchor"></i>
                                    </div>
                                    <div class="content">
                                      <div class="amount">
                                        $<span class="count">0</span>
                                      </div>
                                      <div class="name">Deposit Bonus</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="single-card">
                                    <div class="icon">
                                      <i icon-name="archive"></i>
                                    </div>
                                    <div class="content">
                                      <div class="amount">
                                        $<span class="count">0</span>
                                      </div>
                                      <div class="name">Investment Bonus</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="single-card">
                                    <div class="icon">
                                      <i icon-name="gift"></i>
                                    </div>
                                    <div class="content">
                                      <div class="amount count">0</div>
                                      <div class="name">Total Referral</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="single-card">
                                    <div class="icon">
                                      <i icon-name="award"></i>
                                    </div>
                                    <div class="content">
                                      <div class="amount count">1</div>
                                      <div class="name">Rank Achieved</div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12">
                                  <div class="single-card">
                                    <div class="icon">
                                      <i icon-name="alert-triangle"></i>
                                    </div>
                                    <div class="content">
                                      <div class="amount count">0</div>
                                      <div class="name">Total Ticket</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> -->
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Recent Transactions -->
                  <div
                    class="all-feature-mobile mobile-transactions mb-3 mobile-screen-show"
                  >
                    <div class="title">Recent Transactions</div>
                    <div class="contents">
                      <div class="single-transaction"    v-for="(
                                  transactionItem, index
                                ) in displayedItems"
                                :key="index">
                        <div class="transaction-left">
                          <div class="transaction-des">
                            <div class="transaction-title">
                              {{
                                        transactionItem.type
                                      }} With {{transactionItem.method}}
                            </div>
                            <div class="transaction-id">{{transactionItem.trx}}</div>
                            <div class="transaction-date">
                              {{
                                        transactionItem.created_at.substring(
                                          0,
                                          10
                                        )
                                      }}
                            </div>
                          </div>
                        </div>
                        <div class="transaction-right">
                          <div class="transaction-amount" v-if="transactionItem.type === 'deposit'">+{{
                                        transactionItem.amount
                                      }} USD</div>
                          <div class="transaction-amount" v-else>-{{
                                        transactionItem.amount 

                                      }} USD</div>

                          <div class="transaction-status " :class="{
                                    pending:
                                      transactionItem.status === 'pending',
                                      cancel:
                                      transactionItem.status === 'rejected',
                                    success:
                                      transactionItem.status === 'success',
                                }">{{
                                        transactionItem.status 

                                      }}</div>
                        </div>
                      </div>
                  
                    </div>
                  </div>
                 

                </div>
              </div>
            </div>

            <div class="chart-container">
    <div id="e_chart" class="chart"></div>
  </div>
          </div>
        </div>
      </div>
    </div>

    <!--/Full Layout-->
  </DeshboardLayout>
</template>
  

<script>
import DeshboardLayout from "./../../Layouts/DashboardLayout.vue";
import { useAuthUserStore } from "./../../stores/user";
import { transactionStore } from "../../stores/transaction";
import * as echarts from 'echarts';
export default {
  components: {
    DeshboardLayout,
    
  },
  data() {
    return {
      authUser: [],

      transaction: [],
    };
  },
  methods: {
    initializeChart() {
      this.myChart = echarts.init(document.getElementById('e_chart'));
      this.setChartOptions();
    },
    setChartOptions() {
  const option = {
    backgroundColor: '#2c343c',
    title: {
      text: 'Diversification of Portfolio',
      left: 'center',
      top: 0,
      textStyle: {
        color: '#ccc',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'horizontal',
      left: 'left',
      top: 20,
      textStyle: {
        color: '#fff',
      },
    },
    grid: {
      bottom: 50, // Add space for legend at the bottom
    },
    series: [
      {
        name: 'Investment Types', // Updated label name
        type: 'pie',
        radius: ['40%', '65%'], // Doughnut style
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            top: 20,
            show: true,
            fontSize: '18',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 42, name: 'B2B Debt ETF' },
          { value: 13, name: 'Union Ads' },
          { value: 2, name: 'Government Bonds' },
          { value: 23, name: 'Precious Metal ETF' },
          { value: 20, name: 'Exchange Commissions' },
        ],
        itemStyle: {
          color: function (params) {
            const colors = ['#00c1de', '#fadb14', '#ff4d4f', '#7cb305', '#9254de'];
            return colors[params.dataIndex];
          },
          borderColor: '#1f2330',
          borderWidth: 3,
          shadowBlur: 15,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    ],
  };

  this.myChart.setOption(option);
}, 

handleResize() {
      if (this.myChart) {
        this.myChart.resize();
      }
    },

  },
  computed: {
    sumtrx() {
    return (type, status) => {
      const filteredTransactions = this.transaction.filter(
        (transaction) =>
          transaction.type === type && transaction.status === status
      );

      return filteredTransactions.reduce(
        (total, transaction) => total + Number(transaction.amount), // Ensure numeric addition
        0
      );
    };
  },
    displayedItems() {
      return this.transaction.slice(0, 3);
    },
   
    lastWithdrawCreatedAt() {
      // Filter withdraw transactions with status success
      const withdrawSuccessTransactions = Object.values(
        this.transaction
      ).filter(
        (transaction) =>
          transaction.type === "Withdraw" && transaction.status === "success"
      );

      // If there are no successful withdraw transactions, return '00-00-0000'
      if (withdrawSuccessTransactions.length === 0) {
        return "00-00-0000";
      }

      // Sort the transactions by created_at in descending order
      const sortedTransactions = withdrawSuccessTransactions.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );

      // Get the created_at value of the first transaction (latest one)
      const lastWithdrawCreatedAt = new Date(sortedTransactions[0].created_at);

      // Format the date to 'MM-DD-YYYY'
      const formattedDate = lastWithdrawCreatedAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      return formattedDate;
    },
    lastDepositCreatedAt() {
      // Filter withdraw transactions with status success
      const withdrawSuccessTransactions = Object.values(
        this.transaction
      ).filter(
        (transaction) =>
          transaction.type === "deposit" && transaction.status === "success"
      );

      // If there are no successful withdraw transactions, return '00-00-0000'
      if (withdrawSuccessTransactions.length === 0) {
        return "00-00-0000";
      }

      // Sort the transactions by created_at in descending order
      const sortedTransactions = withdrawSuccessTransactions.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );

      // Get the created_at value of the first transaction (latest one)
      const lastWithdrawCreatedAt = new Date(sortedTransactions[0].created_at);

      // Format the date to 'MM-DD-YYYY'
      const formattedDate = lastWithdrawCreatedAt.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      return formattedDate;
    },
  },
  mounted() {

    this.initializeChart();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  async created() {
    const userStore = useAuthUserStore();
    const authUser = userStore.authUser;

    if (authUser) {
      this.authUser = authUser;
    } else {
      // userStore.reSetAuthUser();
      this.authUser = await userStore.reSetAuthUser();
    }

    const getTransaction = transactionStore();

    const transactionData = getTransaction.authTransaction;

    if (transactionData) {
      this.transaction = transactionData;
    } else {
      this.transaction = await getTransaction.authUserTransaction();
    }

    this.$setLoading(false);
  },
};
</script>
<style scoped>
.imgs {
  width: 80px !important;
  height: 80px !important;
}
.imgs i {
  color: rgb(255, 255, 255);
  font-size: 40px;
}

.video-des .deslidt ul li {
  margin-bottom: 0px;
}
.video-des .deslidt ul li .serials {
  margin: 5px;
}
.video-des .deslidt ul li:first-child {
  padding-top: 20px;
}
.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f2330;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
}

.chart {
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  height: calc(100vw * 0.75); /* Adjust height based on width to maintain aspect ratio */
}

@media (max-width: 768px) {
  .chart {
    height: calc(100vw * 0.9); /* Increase height slightly for smaller screens */
  }
}

@media (max-width: 480px) {
  .chart {
    height: calc(100vw * 1); /* Full height for very small screens */
  }
}
</style>