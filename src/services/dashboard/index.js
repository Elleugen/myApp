import FetchInterceptor from '../../configs/FetchInterceptor';

class Dashboard {
  static async searchDashboard(keyword) {
    const response = await FetchInterceptor.get(`/v1/volumes?q=${keyword}`);
    return response;
  }
  static async getDashboard() {
    const response = await FetchInterceptor.get('/v1/volumes?q=algorithm');
    return response;
  }
}

export default Dashboard;
