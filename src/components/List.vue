<template>
  <div class="col s12 m7 l12">
    <PreLoader :content="requisitions" />
    <div class="col l8">
      <Pagination :paginate="pagination" v-on:get-data="getList" />
    </div>
    <a class="btn-floating btn-large waves-effect waves-light red">
      <i class="material-icons">add</i>
    </a>

    <div class="card horizontal" v-for="(requisition, index) in requisitions" :key="index">
      <div class="card-stacked">
        <div class="card-content">
          <div class="col l4">
            <br />
            <p>
              <strong>Site Name:</strong>
              {{ requisition.site.name }}
            </p>
            <p>
              <strong>Project Name:</strong>
              {{ requisition.site.project.name }}
            </p>
            <p>
              <strong>Client Name:</strong>
              {{ requisition.site.project.client.name }}
            </p>
            <p>
              <strong>Department Name:</strong>
              {{ requisition.site.project.department.name }}
            </p>
            <p>
              <strong>Working Date:</strong>
              {{ requisition.working_date }}
            </p>
            <p>
              <strong>Payment Method:</strong>
              {{ requisition.payment_method }}
            </p>
          </div>

          <div class="col l8">
            <table>
              <thead>
                <th>Category</th>
                <th>Unity</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Total</th>
                <th>Remarks</th>
              </thead>
              <tbody>
                <tr v-for="(detail,key) in requisition.detail" :key="key">
                  <td>{{ detail.category.name }}</td>
                  <td>{{ detail.unit.name }}</td>
                  <td>{{ detail.quantity }}</td>
                  <td>{{ detail.amount }}</td>
                  <td>{{ detail.total }}</td>
                  <td>{{ detail.remarks }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "./partials/Pagination";
import PreLoader from "./partials/PreLoader";
export default {
  name: "List",
  components: {
    Pagination,
    PreLoader
  },
  data() {
    return {
      requisitions: [],
      pagination: {
        count: null,
        next: null,
        previous: null,
        showing: 0
      }
    };
  },
  methods: {
    getList(url = "http://127.0.0.1:8000/requistions/") {
      if (url === null) {
        return false;
      }
      this.requisitions = null;
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.requisitions = data.results;
          this.pagination.count = data.count;
          this.pagination.next = data.next;
          this.pagination.previous = data.previous;
          this.pagination.showing = data.results.length;
        });
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style scoped>
.card-content p {
  padding-bottom: 3px;
}
</style>
