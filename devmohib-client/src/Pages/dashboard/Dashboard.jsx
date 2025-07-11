import React from 'react';

const Dashboard = () => {
    return (
        <div>
            
            {/* Stats */}
                <div className="stats-container">
                    <div className="stat-card">
                        <div className="stat-card-header">
                            <div>
                                <div className="stat-value">1,248</div>
                                <div className="stat-label">Total Users</div>
                            </div>
                            <div className="stat-icon users">
                                <i className="fas fa-users"></i>
                            </div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card-header">
                            <div>
                                <div className="stat-value">342</div>
                                <div className="stat-label">Active Sessions</div>
                            </div>
                            <div className="stat-icon sessions">
                                <i className="fas fa-signal"></i>
                            </div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card-header">
                            <div>
                                <div className="stat-value">98%</div>
                                <div className="stat-label">System Health</div>
                            </div>
                            <div className="stat-icon health">
                                <i className="fas fa-heartbeat"></i>
                            </div>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-card-header">
                            <div>
                                <div className="stat-value">5</div>
                                <div className="stat-label">Recent Alerts</div>
                            </div>
                            <div className="stat-icon alerts">
                                <i className="fas fa-exclamation-triangle"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="content-grid">
                    <div className="left-column">
                        {/* Chart */}
                        <div className="chart-container">
                            <div className="section-header">
                                <h3 className="section-title">Activity Overview</h3>
                                <select style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ddd' }}>
                                    <option>Last 7 Days</option>
                                    <option>Last 30 Days</option>
                                    <option>Last 90 Days</option>
                                </select>
                            </div>
                            <div className="chart-placeholder">[Activity Chart Will Appear Here]</div>
                        </div>

                        {/* Recent Actions */}
                        <div className="recent-actions">
                            <div className="section-header">
                                <h3 className="section-title">Recent Actions</h3>
                                <button style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer' }}>
                                    View All
                                </button>
                            </div>
                            <div className="actions-list">
                                <div className="action-item">
                                    <div className="action-icon">
                                        <i className="fas fa-user-plus"></i>
                                    </div>
                                    <div className="action-details">
                                        <div className="action-title">New user registered</div>
                                        <div className="action-time">2 minutes ago</div>
                                    </div>
                                </div>
                                <div className="action-item">
                                    <div className="action-icon">
                                        <i className="fas fa-file-upload"></i>
                                    </div>
                                    <div className="action-details">
                                        <div className="action-title">Document uploaded</div>
                                        <div className="action-time">15 minutes ago</div>
                                    </div>
                                </div>
                                <div className="action-item">
                                    <div className="action-icon">
                                        <i className="fas fa-cog"></i>
                                    </div>
                                    <div className="action-details">
                                        <div className="action-title">System settings updated</div>
                                        <div className="action-time">1 hour ago</div>
                                    </div>
                                </div>
                                <div className="action-item">
                                    <div className="action-icon">
                                        <i className="fas fa-shield-alt"></i>
                                    </div>
                                    <div className="action-details">
                                        <div className="action-title">Security patch applied</div>
                                        <div className="action-time">3 hours ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="right-column">
                        {/* System Status */}
                        <div className="system-status">
                            <div className="section-header">
                                <h3 className="section-title">System Status</h3>
                                <i className="fas fa-sync-alt" style={{ color: 'var(--gray)', cursor: 'pointer' }}></i>
                            </div>
                            <div className="status-list">
                                <div className="status-item">
                                    <span className="status-label">Server Uptime</span>
                                    <span className="status-value good">99.9%</span>
                                </div>
                                <div className="status-item">
                                    <span className="status-label">CPU Usage</span>
                                    <span className="status-value">32%</span>
                                </div>
                                <div className="status-item">
                                    <span className="status-label">Memory Usage</span>
                                    <span className="status-value">45%</span>
                                </div>
                                <div className="status-item">
                                    <span className="status-label">Database</span>
                                    <span className="status-value good">Normal</span>
                                </div>
                                <div className="status-item">
                                    <span className="status-label">Last Backup</span>
                                    <span className="status-value warning">12 hours ago</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="quick-actions">
                            <button className="action-btn">
                                <i className="fas fa-user-plus"></i>
                                <span>Add User</span>
                            </button>
                            <button className="action-btn">
                                <i className="fas fa-file-export"></i>
                                <span>Export Data</span>
                            </button>
                            <button className="action-btn">
                                <i className="fas fa-cog"></i>
                                <span>Settings</span>
                            </button>
                            <button className="action-btn">
                                <i className="fas fa-question-circle"></i>
                                <span>Help</span>
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Dashboard;