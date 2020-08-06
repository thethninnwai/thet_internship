import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default class contact extends React.Component{
    render() {
        return (
            <html>
                <Head>
                    <title>Golden Snitch | Admin</title>
                </Head>
                <body class="user-profile">
                    <div class="wrapper">
                        <div class="sidebar" data-color="red">
                            <div class="logo">
                                <img src="/assets/img/logoo.png" alt="Logo"/>
                                <a href="/user" class="simple-text logo-normal" style={{textAlign: "center"}}>
                                    Golden Snitch Admin
                                </a>
                            </div>
                                <div class="sidebar-wrapper" id="sidebar-wrapper">
                                    <ul class="nav">
                                        <li>
                                            <a href="/tables">
                                                <i class="now-ui-icons design_bullet-list-67"></i>
                                                <p>Table List</p>
                                            </a>
                                        </li>
                                        <li class="active">
                                            <a href="/user">
                                                <i class="now-ui-icons users_single-02"></i>
                                                <p>User Profile</p>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="main-panel" id="main-panel">
                                <nav class="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
                                    <div class="container-fluid">
                                        <div class="navbar-wrapper">
                                            <div class="navbar-toggle">
                                                <button type="button" class="navbar-toggler">
                                                    <span class="navbar-toggler-bar bar1"></span>
                                                    <span class="navbar-toggler-bar bar2"></span>
                                                    <span class="navbar-toggler-bar bar3"></span>
                                                </button>
                                            </div>
                                            <a class="navbar-brand" style={{fontSize: "x-large"}}>Admin Profile</a>
                                        </div>
                                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-bar navbar-kebab"></span>
                                                <span class="navbar-toggler-bar navbar-kebab"></span>
                                                <span class="navbar-toggler-bar navbar-kebab"></span>
                                            </button>
                                    </div>
                                </nav>
                                <div class="panel-header panel-header-sm">
                                </div>
                                <div class="content">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="card">
                                                <div class="card-header">
                                                    <h5 class="title">Edit Profile</h5>
                                                </div>
                                                <div class="card-body">
                                                    <form>
                                                        <div class="row">
                                                            <div class="col-md-3 pr-1">
                                                                <div class="form-group">
                                                                    <label>Name</label>
                                                                    <input type="text" class="form-control" placeholder="Name" value="Name"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-3 pr-1">
                                                                <div class="form-group">
                                                                    <label>Username</label>
                                                                    <input type="text" class="form-control" placeholder="Username" value="michael23"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-5 pr-1">
                                                                <div class="form-group">
                                                                    <label for="exampleInputEmail1">Email</label>
                                                                    <input type="email" class="form-control" placeholder="Email"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-5 pr-1">
                                                                <div class="form-group">
                                                                    <label>Password</label>
                                                                    <input type="password" class="form-control" placeholder="Password" value="password"/>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-5 pr-1">
                                                                <div class="form-group">
                                                                    <label>Re-enter Password</label>
                                                                    <input type="password" class="form-control" placeholder="Password" value="password"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-3 pr-1">
                                                                &nbsp;<button type="submit" class="btn btn-danger">Change Password</button>
                                                            </div>
                                                            <div class="col-md-3 pl-1">
                                                                <button type="submit" class="btn btn-danger">Sign out</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <footer class="footer">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="inner-content">
                                                    Copyright©2020 GoldenSnitch
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </body>
            </html>
        )
    }
}