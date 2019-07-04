<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-sheet elevation="5" class="mx-auto" height="50%" width="50%">
        <div class="panel-content">
          <v-content>
            <v-container fluid fill-height>
              <v-layout align-center justify-center>
                <v-flex class="frame">
                  <v-form>
                    <v-text-field
                      v-model="login_data.name"
                      prepend-icon="person"
                      clearable
                      label="账户"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="login_data.password"
                      prepend-icon="lock"
                      type="password"
                      label="密码"
                      required
                    ></v-text-field>
                    <v-layout column wrap justify-end align-end>
                      <v-flex>
                        <v-btn :loading="is_loading">
                          <span slot="loader">Loading...</span>
                          登录
                        </v-btn>
                      </v-flex>
                    </v-layout>
                  </v-form>
                </v-flex>
              </v-layout>
            </v-container>
          </v-content>
        </div>
      </v-sheet>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      login_data: {
        name: "",
        password: ""
      },
      is_loading: false
    };
  },
  methods: {},
  created() {}
};
</script>