import { useState, useEffect } from 'react';
import axios from 'axios';

export const useDashboardData = () => {
    const [dashboardData, setDashboardData] = useState({
        overview: {
            totalProperties: 0,
            activeListings: 0,
            totalViews: 0,
            monthlyRevenue: 0
        },
        chartData: {
            monthlyStats: [],
            propertyTypes: [],
            revenueData: []
        },
        recentProperties: [],
        loading: true,
        error: null
    });

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setDashboardData(prev => ({ ...prev, loading: true }));

                // Simulate API calls - replace with your actual endpoints
                const [overviewRes, propertiesRes] = await Promise.all([
                    // Mock data for demonstration - replace with actual API calls
                    Promise.resolve({
                        data: {
                            totalProperties: 24,
                            activeListings: 18,
                            totalViews: 2847,
                            monthlyRevenue: 12450
                        }
                    }),
                    fetch('https://home-nest-cyan.vercel.app/properties').then(res => res.json())
                ]);

                // Generate mock chart data - replace with actual backend data
                const monthlyStats = [
                    { month: 'Jan', properties: 12, views: 1200, revenue: 8500 },
                    { month: 'Feb', properties: 15, views: 1450, revenue: 9200 },
                    { month: 'Mar', properties: 18, views: 1800, revenue: 10800 },
                    { month: 'Apr', properties: 22, views: 2200, revenue: 11500 },
                    { month: 'May', properties: 20, views: 2400, revenue: 12000 },
                    { month: 'Jun', properties: 24, views: 2847, revenue: 12450 }
                ];

                const propertyTypes = [
                    { name: 'Apartments', value: 45, count: 11 },
                    { name: 'Houses', value: 30, count: 7 },
                    { name: 'Condos', value: 15, count: 4 },
                    { name: 'Townhouses', value: 10, count: 2 }
                ];

                const revenueData = [
                    { month: 'Jan', rental: 4500, sales: 4000 },
                    { month: 'Feb', rental: 5200, sales: 4000 },
                    { month: 'Mar', rental: 5800, sales: 5000 },
                    { month: 'Apr', rental: 6500, sales: 5000 },
                    { month: 'May', rental: 7000, sales: 5000 },
                    { month: 'Jun', rental: 7450, sales: 5000 }
                ];

                setDashboardData({
                    overview: overviewRes.data,
                    chartData: {
                        monthlyStats,
                        propertyTypes,
                        revenueData
                    },
                    recentProperties: propertiesRes.slice(0, 5), // Get latest 5 properties
                    loading: false,
                    error: null
                });

            } catch (error) {
                console.error('Error fetching dashboard data:', error);
                setDashboardData(prev => ({
                    ...prev,
                    loading: false,
                    error: 'Failed to load dashboard data'
                }));
            }
        };

        fetchDashboardData();
    }, []);

    return dashboardData;
};